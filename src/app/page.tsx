import type { JSX } from "react";
import Head from "next/head";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

export default function About(): JSX.Element {
    return (
        <>
            <Head>
                <title>About | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active="about" />
            <Main>
                <h1 className="text-2xl pt-4 pb-2">I believe in open software</h1>
                <div className="flex flex-wrap gap-2">
                    <div className="w-80 bg-gray-100 rounded text-center">
                        <h2 className="text-xl">Languages</h2>
                        <div className="flex flex-row gap-x-2 py-1 text-center">
                            <span>TypeScript</span>
                            <span>Advanced</span>
                        </div>
                        <div className="flex flex-row gap-x-2 py-1 text-center">
                            <span>Java</span>
                            <span>Intermediate</span>
                        </div>
                        <div className="flex flex-row gap-x-2 py-1 text-center">
                            <span>Rust</span>
                            <span>Basics</span>
                        </div>
                        <div className="flex flex-row gap-x-2 py-1 text-center">
                            <span>C</span>
                            <span>Basics</span>
                        </div>
                    </div>
                    <div className="w-80 bg-gray-100 rounded text-center">
                        <h2 className="text-xl">Frontend</h2>
                        <div className="flex flex-row gap-x-2 py-1">
                            <span>React</span>
                            <span>Advanced</span>
                        </div>
                        <div className="flex flex-row gap-x-2 py-1">
                            <span>Next</span>
                            <span>Basics</span>
                        </div>
                    </div>
                    <div className="w-80 bg-gray-100 rounded text-center">
                        <h2 className="text-xl">Backend</h2>
                        <div className="flex flex-row gap-x-2 py-1">
                            <span>NestJS</span>
                            <span>Intermediate</span>
                        </div>
                        <div className="flex flex-row gap-x-2 py-1">
                            <span>Spring</span>
                            <span>Intermediate</span>
                        </div>
                    </div>
                    <div className="w-80 bg-gray-100 rounded text-center">
                        <h2 className="text-xl">Mobile</h2>
                        <div className="flex flex-row gap-x-2 py-1">
                            <span>React Native</span>
                            <span>Advanced</span>
                        </div>
                        <div className="flex flex-row gap-x-2 py-1">
                            <span>Flutter</span>
                            <span>Basics</span>
                        </div>
                        <div className="flex flex-row gap-x-2 py-1">
                            <span>Kotlin</span>
                            <span>Basics</span>
                        </div>
                    </div>
                    <div className="w-80 bg-gray-100 rounded text-center">
                        <h2 className="text-xl">Interests</h2>
                        <span className="px-3 py-1 mx-1 inline-block">clean code</span>
                        <span className="px-3 py-1 mx-1 inline-block">clean architecture</span>
                        <span className="px-3 py-1 mx-1 inline-block">unit testing</span>
                        <span className="px-3 py-1 mx-1 inline-block">design patterns</span>
                        <span className="px-3 py-1 mx-1 inline-block">data structures</span>
                        <span className="px-3 py-1 mx-1 inline-block">linux</span>
                        <span className="px-3 py-1 mx-1 inline-block">FOSS</span>
                    </div>
                </div>
                <h2 className="text-xl">Find me</h2>
                <footer className="flex justify-center pt-2 pb-2 items-center">
                    <a
                        className="mx-3"
                        href="http://github.com/joao-arthur"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillGithub size={30} />
                    </a>
                    <a
                        className="mx-3"
                        href="https://www.linkedin.com/in/joao-lothamer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillLinkedin size={30} />
                    </a>
                </footer>
            </Main>
        </>
    );
}
