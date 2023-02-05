import Head from 'next/head';
import { Header } from '@/components/Header';

export default function GameOfLife() {
    return (
        <>
            <Head>
                <title>Game Of Life | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active='projects' />
            <h1>Game Of Life</h1>
        </>
    );
}
