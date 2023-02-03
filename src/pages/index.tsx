import Head from 'next/head';

export default function Home() {
    return (
        <div >
            <Head>
                <title>João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Main page</h1>
            </main>
            <footer>
                <a href="http://github.com/joao-arthur" target="_blank" rel="noopener noreferrer">
                    Github
                </a>
            </footer>
        </div>
    );
}
