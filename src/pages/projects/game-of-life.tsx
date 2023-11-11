import type { ReactElement } from "react";

import path from "path";
import fs from "fs/promises";

import Head from "next/head";
import Markdown from "react-markdown";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";

type propsType = {
    md: string;
};

export default function GameOfLife({ md }: propsType): ReactElement {
    return (
        <>
            <Head>
                <title>Conway's Game Of Life | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active="projects" />
            <Main>
                <div className="prose prose-img:w-32 prose-img:h-w-32 prose-img:rendering-pixelated m-auto">
                    <Markdown>
                        {md}
                    </Markdown>
                </div>
                <iframe
                    src="/game-of-life/index.html"
                    className="w-full h-full"
                />
            </Main>
            <Footer />
        </>
    );
}

export async function getStaticProps(): Promise<{ props: propsType }> {
    const post = path.join(
        process.cwd(),
        `public/projects/game-of-life.md`,
    );
    const md = await fs.readFile(post, "utf8");

    return { props: { md } };
}
