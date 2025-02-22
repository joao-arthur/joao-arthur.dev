/*
type BlogPost = {
    readonly title: string;
    readonly description: string;
    readonly created_at: string;
    readonly updated_at: string;
    readonly technologies: readonly string[];
}
*/

export async function fetchBlog() {
    const posts = await Promise.all(
        Object.entries(import.meta.glob("/src/lib/assets/en-US/blog/*.md")).map(
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
