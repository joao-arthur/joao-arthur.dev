import Head from 'next/head';
import { Header } from '@/components/Header';

export default function About() {
    return (
        <>
            <Head>
                <title>About | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active='about' />
            <main>
                <p>
                    Passionate about great code
                </p>
                <h2>I know</h2>
                <ul>
                    <li>TypeScript</li>
                    <li>React</li>
                </ul>
                <h2>I want to learn</h2>
                <ul>
                    <li>Rust</li>
                    <li>Zig</li>
                    <li>Elixir</li>
                    <li>Svelte</li>
                </ul>
                <h2>I'm good at</h2>
                <ul>
                    <li>Clean Code</li>
                    <li>Unit Testing</li>
                </ul>
            </main>
            <footer>
                <a href="http://github.com/joao-arthur" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
            </footer>
        </>
    );
}
