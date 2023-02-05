import Head from 'next/head';
import { Header } from '@/components/Header';
import { H1 } from '@/components/H1';
import { Footer } from '@/components/Footer';

export default function GameOfLife() {
    return (
        <>
            <Head>
                <title>Game Of Life | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active='projects' />
            <main className='h-full'>
                <H1>Game Of Life</H1>
            </main>
            <Footer />
        </>
    );
}
