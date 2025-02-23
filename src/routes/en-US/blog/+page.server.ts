import type { BlogPost } from '$lib/src/types';
import { fetchBlog } from '$lib/src/fetchBlog.js';

type Data = {
    readonly posts: readonly BlogPost[];
}

export async function load(): Promise<Data> {
    const posts = await fetchBlog("en-US");
    return { posts };
}
