export const prerender = true;

export async function GET() {
    const data = await Promise.all(
        Object.entries(import.meta.glob("$lib/assets/en-US/blog/*.md")).map(async ([path, page]) => {
            const { metadata } = await page();
            const slug = path.split("/").pop().split(".").shift();
            return { ...metadata, slug };
        }),
    )
        .then((posts) => {
            return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        });

    const body = render(data);
    const headers = {
        "Cache-Control": `max-age=0, s-max-age=${600}`,
        "Content-Type": "application/xml",
    };
    return new Response(
        body,
        {
            status: 200,
            headers,
        },
    );
}

const render = (posts) =>
    `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>João Arthur</title>
<description>João Arthur website</description>
<link>https://github.com/josh-collinsworth/sveltekit-blog-starter</link>
<atom:link href="https://joao-arthur.dev/api/rss.xml" rel="self" type="application/rss+xml"/>
${
        posts
            .map(
                (post) =>
                    `<item>
<guid isPermaLink="true">https://joao-arthur.dev/blog/${post.slug}</guid>
<title>${post.title}</title>
<link>https://joao-arthur.dev/blog/${post.slug}</link>
<description>${post.excerpt}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`,
            )
            .join("")
    }
</channel>
</rss>
`;
