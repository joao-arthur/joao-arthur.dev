import type { JSX } from "react";
import type { IdPageProps } from "../../../../lib/types";
import { MarkdownPost } from "../../../../components/MarkdownPost";

export async function generateStaticParams() {
    const res = await fetch("http://localhost:1337/blog.json");
    const posts = await res.json();
    return posts.map((post) => ({ id: post.id }));
}

export default async function Page({ params }: IdPageProps): Promise<JSX.Element> {
    const { id } = await params;
    const post = await fetch(
        `https://raw.githubusercontent.com/joao-arthur/assets/main/blog/${id}/en.md`,
        { cache: "force-cache" },
    ).then((res) => res.text());

    return <MarkdownPost>{post}</MarkdownPost>;
}
