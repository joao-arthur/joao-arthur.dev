import type { Component } from "svelte";
import type { Language, Post } from "./types";

type Data = {
    readonly post: Post;
    readonly Component: Component;
};

export async function fetchBlogPost(language: Language, slug: string): Promise<Data> {
    const post = await import(`../assets/${language}/blog/${slug}.md`);
    return {
        Component: post.default,
        post: { ...post.metadata, slug },
    };
}
