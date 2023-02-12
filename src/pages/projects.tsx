import Head from 'next/head';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active='projects' />
            <main className='h-full'>
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
