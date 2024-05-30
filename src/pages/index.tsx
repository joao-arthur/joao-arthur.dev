import type { JSX } from "react";
import Head from "next/head";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { H1 } from "@/components/H1";
import { H2 } from "@/components/H2";
import { Topic } from "@/components/Topic";
import { Main } from "@/components/Main";

export default function About(): JSX.Element {
    return (
        <>
            <Head>
                <title>About | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active="about" />
            <Main>
                <H1>
                    Passionate about great code.
                </H1>
                <H2>Languages</H2>
                <div className="flex flex-row gap-x-2 py-1">
                    <span>TypeScript</span>
                    <span>Advanced</span>
                </div>
                <div className="flex flex-row gap-x-2 py-1">
                    <span>Java</span>
                    <span>Intermediate</span>
                </div>
                <div className="flex flex-row gap-x-2 py-1">
                    <span>Rust</span>
                    <span>Basics</span>
                </div>
                <H2>Frontend</H2>
                <div className="flex flex-row gap-x-2 py-1">
                    <span>React</span>
                    <span>Advanced</span>
                </div>
                <div className="flex flex-row gap-x-2 py-1">
                    <span>Next</span>
                    <span>Basics</span>
                </div>
                <H2>Backend</H2>
                <div className="flex flex-row gap-x-2 py-1">
                    <span>NestJS</span>
                    <span>Intermediate</span>
                </div>
                <div className="flex flex-row gap-x-2 py-1">
                    <span>Spring</span>
                    <span>Intermediate</span>
                </div>
                <H2>Mobile</H2>
                <div className="flex flex-row gap-x-2 py-1">
                    <span>React Native</span>
                    <span>Advanced</span>
                </div>
                <H2>Interests</H2>
                <Topic>clean code</Topic>
                <Topic>clean architecture</Topic>
                <Topic>unit testing</Topic>
                <Topic>design patterns</Topic>
                <Topic>data structures</Topic>
                <Topic>linux</Topic>
            </Main>
            <Footer />
        </>
    );
}
