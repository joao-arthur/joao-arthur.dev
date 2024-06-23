import type { JSX } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Typo } from "../../components/Typo";
import { Layout } from "../../components/Layout";

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
        <Layout.Content>
            {posts.map((post) => (
                <Link key={post.id} href={`/blog/post/${post.id}`}>
                    <div className="grow-1 shrink-1 max-w-200 min-w-0">
                        <Layout.Card>
                            <div className="h-40 w-full">
                                <Typo.Title label={post.name} />
                                <Typo.SubTitle label={post.id} />
                            </div>
                        </Layout.Card>
                    </div>
                </Link>
            ))}
        </Layout.Content>
    );
}
