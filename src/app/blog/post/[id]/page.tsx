import type { JSX } from "react";
import type { IdPageProps } from "../../../../lib/types";
import { cl } from "../../../../lib/cl";
import Markdown from "react-markdown";

export async function generateStaticParams() {
    const posts = await fetch("https://api.github.com/repos/joao-arthur/assets/contents/blog")
        .then((res) => res.json());
    return posts.map((post) => ({id: post.name}));
}

export default async function Page({ params }: IdPageProps): Promise<JSX.Element> {
    const {id} = await params;
    const post = await fetch(
        `https://raw.githubusercontent.com/joao-arthur/assets/main/blog/${id}/en.md`,
        { cache: "force-cache" },
    ).then((res) => res.text());

    return (
        <div className="w-full px-5">
            <div
                className={cl(
                    "prose dark:prose-invert prose-img:w-32 prose-img:h-w-32 prose-img:rendering-pixelated",
                    "flex flex-col pb-12 pt-5 m-auto",
                )}
            >
                <Markdown>{post}</Markdown>
            </div>
        </div>
    );
}
