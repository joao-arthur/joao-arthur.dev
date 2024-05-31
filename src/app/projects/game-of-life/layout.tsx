import type { JSX } from "react";
import Head from "next/head";
import { Header } from "../../../components/Header";
import { Main } from "../../../components/Main";

type Props = {
    readonly children: string;
};

export default function GameOfLife({ children }: Props): JSX.Element {
    return (
        <>
            <Head>
                <title>Conway's Game Of Life | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active="projects" />
            <Main>
                {children}
                <iframe
                    src="/game-of-life/index.html"
                    className="w-full h-full"
                />
            </Main>
        </>
    );
}
