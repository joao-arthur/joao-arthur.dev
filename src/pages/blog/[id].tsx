import type { JSX } from "react";
import type { GetStaticPropsContext } from "next";
import path from "path";
import fs from "fs/promises";
import Head from "next/head";
import Markdown from "react-markdown";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";

type Props = {
    md: string;
};

type staticPropsType = {
    id: string;
};

export default function BlogPost({ md }: Props): JSX.Element {
    return (
        <>
            <Head>
                <title>Blog | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active="blog" />
            <Main>
                <div className="prose m-auto">
                    <Markdown>
                        {md}
                    </Markdown>
                </div>
            </Main>
            <Footer />
        </>
    );
}

export async function getStaticPaths(): Promise<{
    paths: unknown[];
    fallback: false;
}> {
    const postsDirectory = path.join(
        process.cwd(),
        "public/posts.json",
    );
    const json = await fs.readFile(postsDirectory, "utf8");
    const posts: { name: string; title: string }[] = JSON.parse(json);
    const paths = posts.map((post) => ({ params: { id: post.name } }));

    return { paths, fallback: false };
}

export async function getStaticProps(
    context: GetStaticPropsContext<staticPropsType>,
): Promise<{ props: Props }> {
    const post = path.join(
        process.cwd(),
        `public/blog/${context.params?.id}.md`,
    );
    const md = await fs.readFile(post, "utf8");

    return { props: { md } };
}
