import { fetch_post_portfolio } from "$lib/src/fetch_post_portfolio";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    try {
        const portfolioPost = await fetch_post_portfolio("pt-BR", params.post);
        return portfolioPost;
    } catch (err) {
        error(404, err);
    }
}
