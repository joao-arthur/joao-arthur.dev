import type { JSX } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { useHeaderStore } from "../../lib/useHeaderStore";

type Post = {
    readonly name: string;
    readonly title: string;
};

export const metadata: Metadata = {
    title: "Blog | João Arthur",
};

export default function Blog(): JSX.Element {
    const { setPage } = useHeaderStore();
    setPage("project");

    const posts: readonly Post[] = [
        { name: "2023-08-11", title: "Thoughts on Layered Architecture and market" },
        { name: "2023-08-12", title: "Thoughts on interfaces" },
    ];

    return (
        <section className="flex flex-col gap-5">
            {posts.map((post) => (
                <Link
                    key={post.name}
                    href={`/blog/post/${post.name}`}
                >
                    <div className="px-10 shadow-md bg-slate-100 flex flex-col">
                        <h1 className="text-2xl pt-4 pb-2 text-gray-800">
                            {post.title}
                        </h1>
                        <span className="self-end pb-2 text-gray-600">
                            {}
                        </span>
                    </div>
                </Link>
            ))}
        </section>
    );
}
