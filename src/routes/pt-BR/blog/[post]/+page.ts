import { fetchBlogPost } from "$lib/src/fetchBlogPost";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    try {
        const blogPost = await fetchBlogPost("pt-BR", params.post);
        return blogPost;
    } catch (err) {
        error(404, err);
    }
}
