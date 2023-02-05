import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { H1 } from '@/components/H1';
import Link from 'next/link';

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active='projects' />
            <main className='h-full'>
                <H1>projects</H1>
                <Link href='/projects/gameoflife'>
                    <section>
                        <h3>game of life</h3>
                    </section>
                </Link>
            </main>
            <Footer />
        </>
    );
}
