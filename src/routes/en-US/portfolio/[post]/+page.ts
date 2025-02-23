import { fetchPortfolioPost } from "$lib/src/fetchPortfolioPost";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    try {
        const post = await fetchPortfolioPost("en-US", params.post);
        return post;
    } catch (err) {
        error(404, err);
    }
}
