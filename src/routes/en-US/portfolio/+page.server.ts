import type { Post } from "$lib/src/types";
import { fetch_portfolio } from "$lib/src/fetch_portfolio";

type Data = {
    readonly posts: readonly Post[];
};

export async function load(): Promise<Data> {
    const posts = await fetch_portfolio("en-US");
    return { posts };
}
