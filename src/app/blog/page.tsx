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
        <section className="flex flex-col items-center gap-y-5 w-full h-full">
            {posts.map((post) => (
                <div key={post.id} className="w-full max-w-200 p-5">
                    <Link href={`/blog/post/${post.id}`}>
                        <div className="grow-1 shrink-1 max-w-200 min-w-0 mx-2 my">
                            <Card>
                                <div className="h-40 w-full">
                                    <Title label={post.name} />
                                    <SubTitle label={post.id} />
                                </div>
                            </Card>
                        </div>
                    </Link>
                </div>
            ))}
        </section>
    );
}
