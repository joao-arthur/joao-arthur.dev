import type { JSX } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Card } from "../../components/Card";
import { Title } from "../../components/Title";
import { SubTitle } from "../../components/SubTitle";

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
        <section className="w-full min-h-full flex flex-col gap-y-10 max-w-200 px-10">
            {posts.map((post) => (
                <Link key={post.id} href={`/blog/post/${post.id}`}>
                    <div className="grow-1 shrink-1 max-w-200 min-w-0">
                        <Card>
                            <div className="h-40 w-full">
                                <Title label={post.name} />
                                <SubTitle label={post.id} />
                            </div>
                        </Card>
                    </div>
                </Link>
            ))}
        </section>
    );
}
