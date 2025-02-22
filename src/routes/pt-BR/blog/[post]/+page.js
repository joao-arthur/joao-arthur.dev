import { error } from "@sveltejs/kit";

export async function load({ params }) {
    try {
        const post = await import(`../../../../lib/assets/pt-BR/blog/${params.post}.md`);
        return {
            PostContent: post.default,
            meta: { ...post.metadata, slug: params.post },
        };
    } catch (err) {
        error(404, err);
    }
}
