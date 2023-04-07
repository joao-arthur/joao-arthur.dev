import type { ReactElement } from "react";
import Head from "next/head";
import { Header } from "@/components/Header";
import { H1 } from "@/components/H1";
import { Footer } from "@/components/Footer";

export default function GameOfLife(): ReactElement {
    return (
        <>
            <Head>
                <title>Game Of Life | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active="projects" />
            <main className="h-full w-full flex flex-col">
                <H1>Game Of Life</H1>
                <iframe
                    src="/game-of-life/index.html"
                    className="w-full h-full"
                />
            </main>
            <Footer />
        </>
    );
}
