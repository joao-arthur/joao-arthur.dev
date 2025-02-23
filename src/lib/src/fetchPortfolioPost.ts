import type { Component } from "svelte";
import type { Language, Post } from "./types";

type Data = {
    readonly post: Post;
    readonly Component: Component;
};

export async function fetchPortfolioPost(language: Language, slug: string): Promise<Data> {
    const post = await import(`../assets/${language}/portfolio/${slug}.md`);
    return {
        post: { ...post.metadata, slug },
        Component: post.default,
    };
}
