/*
type PortfolioPost = {
    readonly title: string;
    readonly description: string;
    readonly created_at: string;
    readonly updated_at: string;
    readonly languages: readonly string[];
    readonly technologies: readonly string[];
    readonly img_url: string;
}
*/

export async function fetchPortfolio() {
    const posts = await Promise.all(
        Object.entries(import.meta.glob("/src/lib/en-US/portfolio/*.md")).map(
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
