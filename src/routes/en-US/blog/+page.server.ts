import type { BlogPost } from '$lib/src/types';
import { fetchBlog } from '$lib/src/fetchBlog.js';

type Props = {
    posts: readonly BlogPost[];
}

export async function load(): Promise<Props> {
    const posts = await fetchBlog("en-US");
    return { posts };
}
