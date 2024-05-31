import type { JSX } from "react";
import { Metadata } from "next";
import Link from "next/link";

type Post = {
    readonly id: string;
    readonly name: string;
};

export const metadata: Metadata = {
    title: "Blog | João Arthur",
};

export default function Blog(): JSX.Element {
    const posts: readonly Post[] = [
        { id: "2023-08-12", name: "Thoughts on interfaces" },
        { id: "2023-08-11", name: "Thoughts on Layered Architecture and Market" },
    ];

    return (
        <section className="flex flex-col items-center gap-y-5 w-full h-full">
            {posts.map((post) => (
                <div key={post.id} className="flex flex-col w-full max-w-200 p-5 overflow-hidden">
                    <Link href={`/blog/post/${post.id}`}>
                        <div className="grow-1 shrink-1 max-w-200 min-w-0 h-40 mx-2 p-5 shadow-md bg-slate-100">
                            <h1 className="text-2xl text-gray-800">
                                {post.name}
                            </h1>
                            <span className="text-gray-600">
                                {post.id}
                            </span>
                        </div>
                    </Link>
                </div>
            ))}
        </section>
    );
}
