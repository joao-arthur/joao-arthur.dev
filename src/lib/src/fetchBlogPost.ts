import type { Language } from "./types";

export async function fetchBlogPost(language: Language, id: string) {
    const post = await import(`../assets/${language}/blog/${id}.md`);
    return {
        PostContent: post.default,
        meta: { ...post.metadata, slug: id },
    };
}
