import { fetchBlogPost } from "$lib/src/fetchBlogPost";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    try {
        const post = await fetchBlogPost("pt-BR", params.post);
        return post;
    } catch (err) {
        error(404, err);
    }
}
