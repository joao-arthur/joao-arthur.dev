import type { BlogPost } from '$lib/src/types';
import { fetchBlog } from '$lib/src/fetchBlog';

type Data = {
    readonly posts: readonly BlogPost[];
}

export async function load(): Promise<Data> {
    const posts = await fetchBlog("pt-BR");
    console.log(posts);
    return { posts };
}
