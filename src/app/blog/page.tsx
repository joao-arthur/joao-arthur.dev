import type { JSX } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Card } from "../../components/Card";

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
                <Card
                    key={post.id}
                    title={post.name}
                    subTitle={post.id}
                    href={`/blog/post/${post.id}`}
                />
            ))}
        </section>
    );
}
