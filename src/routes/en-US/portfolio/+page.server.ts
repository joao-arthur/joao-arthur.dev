import type { PortfolioPost } from "$lib/src/types";
import { fetchPortfolio } from '$lib/src/fetchPortfolio';

type Props = {
    posts: readonly PortfolioPost[];
}

export async function load(): Promise<Props> {
    const posts = await fetchPortfolio("en-US");
    return { posts };
}
