import type { JSX } from "react";
import type { IdPageProps } from "../../../../lib/types";
import { MarkdownPost } from "../../../../components/MarkdownPost";

export async function generateStaticParams() {
    const res = await fetch("https://api.github.com/repos/joao-arthur/assets/contents/portfolio");
    const contents = await res.json();
    return contents.map((post) => ({ id: post.name }));
}

export default async function Page({ params }: IdPageProps): Promise<JSX.Element> {
    const { id } = await params;
    const post = await fetch(
        `https://raw.githubusercontent.com/joao-arthur/assets/main/portfolio/${id}/en.md`,
        { cache: "force-cache" },
    ).then((res) => res.text());

    return <MarkdownPost>{post}</MarkdownPost>;
}
