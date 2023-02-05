import Head from 'next/head';
import { Header } from '@/components/Header';

export default function Blog() {
    return (
        <>
            <Head>
                <title>Blog | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active='blog' />
            <h1>blog</h1>
        </>
    );
}
