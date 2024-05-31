import type { JSX } from "react";

import Head from "next/head";
import { Header } from "../../../components/Header";
import { Main } from "../../../components/Main";

type Props = {
    readonly children: JSX.Element;
};

export default function PreciseSchedule({ children }: Props): JSX.Element {
    return (
        <>
            <Head>
                <title>Precise Schedule | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active="projects" />
            <Main>
                {children}
                <iframe
                    src="/precise-schedule/index.html"
                    className="w-full h-full"
                />
            </Main>
        </>
    );
}
