import type { Post } from "$lib/src/types";
import { fetch_blog } from "$lib/src/fetch_blog";

type Data = {
    readonly posts: readonly Post[];
};

export async function load(): Promise<Data> {
    const posts = await fetch_blog("pt-BR");
    return { posts };
}
