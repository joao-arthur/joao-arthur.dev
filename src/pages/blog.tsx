import type { ReactElement } from "react";
import path from "path";
import fs from "fs/promises";
import Head from "next/head";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { H1 } from "@/components/H1";

type props = {
    readonly posts: readonly {
        name: string;
        title: string;
    }[];
};

export default function Blog({ posts }: props): ReactElement {
    function formatDate(name: string): string {
        const [year, month, day] = name.split("-");
        return new Date(
            Number(year),
            Number(month) - 1,
            Number(day),
        ).toLocaleDateString();
    }

    return (
        <>
            <Head>
                <title>Blog | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active="blog" />
            <main className="h-full">
                {posts.map((post) => (
                    <Link key={post.name} href={`/blog/${post.name}`}>
                        <div className="px-10 shadow-md bg-slate-100 flex flex-col">
                            <H1 className="text-gray-800">
                                {post.title}
                            </H1>
                            <span className="self-end pb-2 text-gray-600">
                                {formatDate(post.name)}
                            </span>
                        </div>
                    </Link>
                ))}
            </main>
            <Footer />
        </>
    );
}

export async function getStaticProps(): Promise<{ props: props }> {
    const postsDirectory = path.join(
        process.cwd(),
        "public/posts.json",
    );
    const json = await fs.readFile(postsDirectory, "utf8");
    const posts: { name: string; title: string }[] = JSON.parse(json);

    return {
        props: {
            posts,
        },
    };
}
