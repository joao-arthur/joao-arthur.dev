"use client";

import type { JSX } from "react";
import Markdown from "react-markdown";
import { Prism } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import { cl } from "../lib/cl";
import { useColorScheme } from "@mui/material";

type MarkdownPostProps = {
    readonly children: string;
};

export function MarkdownPost({ children }: MarkdownPostProps): JSX.Element {
    const colorScheme = useColorScheme();

    return (
        <div className="w-full px-5">
            <div
                className={cl(
                    { "prose-invert": colorScheme?.mode === "dark" },
                    "prose prose-img:w-32 prose-img:h-w-32 prose-img:rendering-pixelated",
                    "flex flex-col pb-12 pt-5 m-auto",
                )}
            >
                <Markdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        code: ({ children, className }) => (
                            <Prism
                                PreTag="div"
                                children={String(children).replace(/\n$/, "")}
                                language={className ? className.replace("language-", "") : "sh"}
                                style={oneDark}
                                showLineNumbers
                            />
                        ),
                    }}
                >
                    {children}
                </Markdown>
            </div>
        </div>
    );
}
