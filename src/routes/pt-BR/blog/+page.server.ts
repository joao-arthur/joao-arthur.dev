import type { Post } from "$lib/src/types";
import { fetchBlog } from "$lib/src/fetchBlog";

type Data = {
    readonly posts: readonly Post[];
};

export async function load(): Promise<Data> {
    const posts = await fetchBlog("pt-BR");
    return { posts };
}
