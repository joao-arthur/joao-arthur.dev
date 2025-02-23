import type { Post } from "$lib/src/types";
import { fetch_blog } from "$lib/src/fetch_blog.js";

type Data = {
    readonly posts: readonly Post[];
};

export async function load(): Promise<Data> {
    const posts = await fetch_blog("en-US");
    return { posts };
}
