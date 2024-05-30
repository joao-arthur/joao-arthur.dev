import type { JSX } from "react";
import Head from "next/head";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { H1 } from "@/components/H1";
import { Main } from "@/components/Main";

export default function Projects(): JSX.Element {
    return (
        <>
            <Head>
                <title>Projects | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active="projects" />
            <Main>
                <section className="flex flex-col gap-5">
                    <Link href="/projects/game-of-life">
                        <div className="px-10 shadow-md bg-slate-100">
                            <H1 className="text-gray-800">
                                Conway's Game Of Life
                            </H1>
                        </div>
                    </Link>
                    <Link href="/projects/precise-schedule">
                        <div className="px-10 shadow-md bg-slate-100">
                            <H1 className="text-gray-800">
                                Precise Schedule
                            </H1>
                        </div>
                    </Link>
                </section>
            </Main>
            <Footer />
        </>
    );
}
