import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function projects() {
    return (
        <>
            <Head>
                <title>Projects | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active='projects' />
            <main className='h-full'>
                <h1>projects</h1>
            </main>
            <Footer />
        </>
    );
}
