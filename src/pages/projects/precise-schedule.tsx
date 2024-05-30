import type { JSX } from "react";

import path from "path";
import fs from "fs/promises";

import Head from "next/head";
import Markdown from "react-markdown";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

type Props = {
    readonly md: string;
};

export default function PreciseSchedule({ md }: Props): JSX.Element {
    return (
        <>
            <Head>
                <title>Precise Schedule | João Arthur</title>
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
                    src="/precise-schedule/index.html"
                    className="w-full h-full"
                />
            </Main>
        </>
    );
}

export async function getStaticProps(): Promise<{ props: Props }> {
    const post = path.join(
        process.cwd(),
        `public/projects/precise-schedule.md`,
    );
    const md = await fs.readFile(post, "utf8");

    return { props: { md } };
}
