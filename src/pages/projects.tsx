import Head from 'next/head';
import { Header } from '@/components/Header';

export default function projects() {
    return (
        <>
            <Head>
                <title>Projects | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active='projects' />
            <h1>projects</h1>
        </>
    );
}
