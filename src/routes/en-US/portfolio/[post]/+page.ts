import { fetch_post_portfolio } from "$lib/src/fetch_post_portfolio";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    try {
        const portfolioPost = await fetch_post_portfolio("en-US", params.post);
        return portfolioPost;
    } catch (err) {
        if (err instanceof Error) {
            error(404, { message: err.message });
        }
    }
}
