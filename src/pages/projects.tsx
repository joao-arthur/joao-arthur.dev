import Head from 'next/head';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { H1 } from '@/components/H1';

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
                        <Link href='/projects/game-of-life'>
                            <div className='px-10 shadow-md bg-slate-100'>
                                <H1 className='text-gray-800'>Game Of Life</H1>
                            </div>
                        </Link>
                    </section>
                </Link>
            </main>
            <Footer />
        </>
    );
}
