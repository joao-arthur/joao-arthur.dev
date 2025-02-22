export async function load({ url, fetch }) {
    const posts = await Promise.all(
        Object.entries(import.meta.glob("../../../lib/en-US/portfolio/*.md")).map(
            async ([path, resolver]) => {
                const { metadata } = await resolver();
                const slug = path.split("/").pop().slice(0, -3);
                return { ...metadata, slug };
            },
        ),
    );
    const sortedPosts = posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    return { posts: sortedPosts };
}
