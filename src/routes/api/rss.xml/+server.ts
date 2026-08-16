import type { Post } from "$lib/src/types";

export const prerender = true;

export async function GET() {
    const posts: readonly (Post | undefined)[] = await Promise.all(
        Object.entries(import.meta.glob("$lib/assets/en-US/blog/*.md"))
            .map(
                async ([path, resolver]) => {
                    const result = await resolver();
                    if (typeof result === "object" && result !== null && "metadata" in result) {
                        const slug = path.split("/").pop()?.split(".").shift() || "";
                        return { ...result.metadata as Post, slug };
                    }
                    return undefined;
                },
            ),
    );
    const postsSorted = posts.filter((post): post is Post => !!post).toSorted((a, b) =>
        b.created_at.localeCompare(a.created_at)
    );
    const body = render(postsSorted);
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
