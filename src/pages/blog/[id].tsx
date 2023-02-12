import path from 'path';
import fs from 'fs/promises';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

type propsType = {
    md: string;
};

type staticPropsType = {
    id: string;
};

export default function BlogPost({ md }: propsType) {
    return (
        <>
            <Head>
                <title>Blog | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active='blog' />
            <main className='h-full prose'>
                <ReactMarkdown>
                    {md}
                </ReactMarkdown>
            </main>
            <Footer />
        </>
    );
}

export async function getStaticPaths() {
    const postsDirectory = path.join(process.cwd(), 'public/posts.json');
    const json = await fs.readFile(postsDirectory, 'utf8');
    const posts: string[] = JSON.parse(json);
    const paths = posts
        .map(post => ({
            params: { id: post },
        }));

    return { paths, fallback: false };
}


export async function getStaticProps(context: GetStaticPropsContext<staticPropsType>) {
    const post = path.join(process.cwd(), `public/blog/${context.params?.id}.md`);
    const md = await fs.readFile(post, 'utf8');

    return {
        props: {
            md,
        },
    };
}
