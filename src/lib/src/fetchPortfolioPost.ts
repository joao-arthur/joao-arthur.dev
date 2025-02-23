import type { Language } from "./types";

export async function fetchPortfolioPost(language: Language, id: string) {
    const post = await import(`../assets/${language}/portfolio/${id}.md`);
    return {
        PostContent: post.default,
        meta: { ...post.metadata, slug: id },
    };
}
