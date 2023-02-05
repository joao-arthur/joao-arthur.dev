import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Blog() {
    return (
        <>
            <Head>
                <title>Blog | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active='blog' />
            <main className='h-full'>
                <h1>blog</h1>
            </main>
            <Footer />
        </>
    );
}
