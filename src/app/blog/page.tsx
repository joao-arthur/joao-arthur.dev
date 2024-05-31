import type { JSX } from "react";
import Head from "next/head";
import Link from "next/link";
import { useHeaderStore } from "../../lib/useHeaderStore";
import { H1 } from "../../components/H1";

type Post = {
    readonly name: string;
    readonly title: string;
};

export default function Blog(): JSX.Element {
    const { setPage } = useHeaderStore();
    setPage("project");

    const posts: readonly Post[] = [
        { name: "2023-08-11", title: "Thoughts on Layered Architecture and market" },
        { name: "2023-08-12", title: "Thoughts on interfaces" },
    ];

    return (
        <>
            <Head>
                <title>Blog | João Arthur</title>
            </Head>
            <section className="flex flex-col gap-5">
                {posts.map((post) => (
                    <Link
                        key={post.name}
                        href={`/blog/post/${post.name}`}
                    >
                        <div className="px-10 shadow-md bg-slate-100 flex flex-col">
                            <H1 className="text-gray-800">
                                {post.title}
                            </H1>
                            <span className="self-end pb-2 text-gray-600">
                            </span>
                        </div>
                    </Link>
                ))}
            </section>
        </>
    );
}
