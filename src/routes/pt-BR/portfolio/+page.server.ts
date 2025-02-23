import type { Post } from "$lib/src/types";
import { fetchPortfolio } from "$lib/src/fetchPortfolio";

type Data = {
    readonly posts: readonly Post[];
};

export async function load(): Promise<Data> {
    const posts = await fetchPortfolio("pt-BR");
    return { posts };
}
