import { fetchPortfolioPost } from "$lib/src/fetchPortfolioPost";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    try {
        const portfolioPost = await fetchPortfolioPost("en-US", params.post);
        return portfolioPost;
    } catch (err) {
        error(404, err);
    }
}
