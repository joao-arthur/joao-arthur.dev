import type { JSX } from "react";
import type { IdPageProps } from "../../../../lib/types";
import { MarkdownPost } from "../../../../components/MarkdownPost";

export async function generateStaticParams() {
    const res = await fetch(globalThis.process.env.URL_BLOG_CONTENTS);
    const contents = await res.json();
    return contents.map((post) => ({ id: post.name }));
}

export default async function Page({ params }: IdPageProps): Promise<JSX.Element> {
    const { id } = await params;
    const res =  await fetch(`${globalThis.process.env.URL_BLOG_POST}/${id}/en.md`, { cache: "force-cache" });
    const post = await res.text();

    return <MarkdownPost>{post}</MarkdownPost>;
}
