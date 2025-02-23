import { fetchBlogPost } from "$lib/src/fetchBlogPost";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    try {
        const blogPost = await fetchBlogPost("en-US", params.post);
        return blogPost;
    } catch (err) {
        error(404, err);
    }
}
