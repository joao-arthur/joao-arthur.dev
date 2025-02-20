import { fetchPortfolio } from "$lib/assets/js/fetchPortfolio";
import { json } from "@sveltejs/kit";

export const prerender = true;

export async function GET() {
    const { posts } = await fetchPortfolio();
    return json(posts);
}
