import type { JSX } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { useHeaderStore } from "../../lib/useHeaderStore";

type Post = {
    readonly id: string;
    readonly name: string;
};

export const metadata: Metadata = {
    title: "Blog | João Arthur",
};

export default function Blog(): JSX.Element {
    const { setPage } = useHeaderStore();
    setPage("project");

    const posts: readonly Post[] = [
        { id: "2023-08-11", name: "Thoughts on Layered Architecture and Market" },
        { id: "2023-08-12", name: "Thoughts on interfaces" },
    ];

    return (
        <section className="flex flex-col items-center gap-y-5">
            {posts.map((post) => (
                <Link key={post.id} href={`/blog/post/${post.name}`}>
                    <div className="w-200 h-40 p-5 shadow-md bg-slate-100 flex flex-col">
                        <h1 className="text-2xl text-gray-800">
                            {post.name}
                        </h1>
                        <span className="text-gray-600">
                            {post.id}
                        </span>
                    </div>
                </Link>
            ))}
        </section>
    );
}
