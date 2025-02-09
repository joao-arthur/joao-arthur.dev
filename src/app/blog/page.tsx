import type { JSX } from "react";
import type { BlogPost } from "../../lib/types";
import { Metadata } from "next";
import Link from "next/link";
import { Typo } from "../../components/Typo";
import { Layout } from "../../components/Layout";

export const metadata: Metadata = {
    title: "Blog | João Arthur",
};

export default async function BlogPage(): Promise<JSX.Element> {
    const posts: readonly BlogPost[] = await fetch(
        "https://raw.githubusercontent.com/joao-arthur/assets/main/blog.json",
        { cache: "force-cache" },
    ).then((res) => res.json());

    return (
        <Layout.Content>
            {posts.map((post) => (
                <Link key={post.id} href={`/blog/post/${post.id}`}>
                    <div className="grow-1 shrink-1 max-w-200 min-w-0">
                        <Layout.Card>
                            <div className="h-40 w-full">
                                <Typo.Title label={post.name.en} />
                                <Typo.SubTitle label={post.date} />
                            </div>
                        </Layout.Card>
                    </div>
                </Link>
            ))}
        </Layout.Content>
    );
}
