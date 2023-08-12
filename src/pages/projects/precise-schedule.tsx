import type { ReactElement } from "react";

import path from "path";
import fs from "fs/promises";

import Head from "next/head";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";

type propsType = {
    md: string;
};

export default function PreciseSchedule(
    { md }: propsType,
): ReactElement {
    return (
        <>
            <Head>
                <title>Precise Schedule | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active="projects" />
            <Main>
                <div className="prose prose-img:w-32 prose-img:h-w-32 prose-img:rendering-pixelated m-auto">
                    <ReactMarkdown>
                        {md}
                    </ReactMarkdown>
                </div>
                <iframe
                    src="/precise-schedule/index.html"
                    className="w-full h-full"
                />
            </Main>
            <Footer />
        </>
    );
}

export async function getStaticProps(): Promise<
    { props: propsType }
> {
    const post = path.join(
        process.cwd(),
        `public/projects/precise-schedule.md`,
    );
    const md = await fs.readFile(post, "utf8");

    return {
        props: {
            md,
        },
    };
}
