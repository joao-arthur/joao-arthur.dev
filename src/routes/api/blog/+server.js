import { fetchBlog } from "$lib/assets/js/fetchBlog";
import { json } from "@sveltejs/kit";

export const prerender = true;

export async function GET() {
    const { posts } = await fetchBlog();
    return json(posts);
}
