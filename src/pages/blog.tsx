import path from 'path';
import fs from 'fs/promises';
import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { H1 } from '@/components/H1';
import Link from 'next/link';

type propsType = {
    readonly posts: readonly string[];
}

export default function Blog({ posts }: propsType) {
    return (
        <>
            <Head>
                <title>Blog | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active='blog' />
            <main className='h-full'>
                {posts.map(post => (
                    <Link key={post} href={`/blog/${post}`}>
                        <div className='px-2 shadow-md bg-slate-100'>
                            <H1>{post}</H1>
                        </div>
                    </Link>
                ))}
            </main>
            <Footer />
        </>
    );
}


export async function getStaticProps() {
    const postsDirectory = path.join(process.cwd(), 'public/posts.json');
    const json = await fs.readFile(postsDirectory, 'utf8');
    const posts: string[] = JSON.parse(json);

    return {
        props: {
            posts,
        },
    };
}

