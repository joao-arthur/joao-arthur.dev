import type { JSX } from "react";
import path from "path";
import fs from "fs/promises";
import Head from "next/head";
import Link from "next/link";
import { Header } from "@/components/Header";
import { H1 } from "@/components/H1";
import { Main } from "@/components/Main";

type Props = {
    readonly posts: readonly {
        readonly name: string;
        readonly title: string;
    }[];
};

export default function Blog({ posts }: Props): JSX.Element {
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
            <Main>
                <section className="flex flex-col gap-5">
                    {posts.map((post) => (
                        <Link
                            key={post.name}
                            href={`/blog/${post.name}`}
                        >
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
                </section>
            </Main>
        </>
    );
}

export async function getStaticProps(): Promise<{ props: Props }> {
    const postsDirectory = path.join(
        process.cwd(),
        "public/posts.json",
    );
    const json = await fs.readFile(postsDirectory, "utf8");
    const posts: { name: string; title: string }[] = JSON.parse(json);

    return { props: { posts } };
}
