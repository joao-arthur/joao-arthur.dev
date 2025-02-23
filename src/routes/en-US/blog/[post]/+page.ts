import { fetch_post_blog } from "$lib/src/fetch_post_blog";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    try {
        const blogPost = await fetch_post_blog("en-US", params.post);
        return blogPost;
    } catch (err) {
        error(404, err);
    }
}
