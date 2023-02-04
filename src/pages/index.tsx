import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <Head>
                <title>João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <nav className='flex justify-around bg-red-800'>
                    <Link href={'about'}>about</Link>
                    <Link href={'blog'}>blog</Link>
                    <Link href={'projects'}>projects</Link>
                </nav>
            </header>
            <main>
                <p>
                    Passionate about great code
                </p>
                <h2>I know</h2>
                <ul>
                    <li>typescript</li>
                </ul>
                <h2>I want to learn</h2>
                <ul>
                    <li>rust</li>
                    <li>zig</li>
                    <li>elixir</li>
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
        </div>
    );
}
