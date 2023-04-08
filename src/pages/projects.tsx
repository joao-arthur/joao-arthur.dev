import type { ReactElement } from "react";
import Head from "next/head";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { H1 } from "@/components/H1";
import { Main } from "@/components/Main";

export default function Projects(): ReactElement {
    return (
        <>
            <Head>
                <title>Projects | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active="projects" />
            <Main>
                <Link href="/projects/gameoflife">
                    <section>
                        <Link href="/projects/game-of-life">
                            <div className="px-10 shadow-md bg-slate-100">
                                <H1 className="text-gray-800">
                                    Game Of Life
                                </H1>
                            </div>
                        </Link>
                    </section>
                </Link>
            </Main>
            <Footer />
        </>
    );
}
