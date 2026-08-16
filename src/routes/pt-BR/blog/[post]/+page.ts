import { fetch_post_blog } from "$lib/src/fetch_post_blog";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    try {
        const blogPost = await fetch_post_blog("pt-BR", params.post);
        return blogPost;
    } catch (err) {
        if (err instanceof Error) {
            error(404, { message: err.message });
        }
    }
}
