import type { JSX } from "react";
import type { IdPageProps } from "../../../../lib/types";
import Markdown from "react-markdown";
import { Prism } from "react-syntax-highlighter";
import { cl } from "../../../../lib/cl";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export async function generateStaticParams() {
    const posts = await fetch("https://api.github.com/repos/joao-arthur/assets/contents/portfolio")
        .then((res) => res.json());
    return posts
        .map((post) => post.name.slice(0, -3))
        .map((id) => ({ id }));
}

export default async function Page({ params: { id } }: IdPageProps): Promise<JSX.Element> {
    const post = await fetch(
        `https://raw.githubusercontent.com/joao-arthur/assets/main/portfolio/${id}.md`,
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
                <Markdown
                    components={{
                        code({ children, className, node, ...rest }) {
                            return (
                                <Prism
                                    PreTag="div"
                                    children={String(children).replace(/\n$/, "")}
                                    language={"javascript"}
                                    style={oneDark}
                                    showLineNumbers
                                />
                            );
                        },
                    }}
                >
                    {post}
                </Markdown>
            </div>
        </div>
    );
}
