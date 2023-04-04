import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { H1 } from '@/components/H1';
import { H2 } from '@/components/H2';
import { Topic } from '@/components/Topic';
import { TechInfo } from '@/components/TechInfo';

export default function About() {
    return (
        <>
            <Head>
                <title>About | João Arthur</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header active='about' />
            <main className='h-full'>
                <H1>
                    Passionate about great code.
                </H1>
                <H2>Languages</H2>
                <div className='flex flex-row items-center py-1'>
                    <TechInfo name='TypeScript' level='ADVANCED' />
                </div>
                <div className='flex flex-row items-center py-1'>
                    <TechInfo name='Java' level='INTERMEDIATE' />
                </div>
                <div className='flex flex-row items-center py-1'>
                    <TechInfo name='Rust' level='BASICS' />
                </div>
                <div className='flex flex-row items-center py-1'>
                    <TechInfo name='Zig' level='HELLO_WORLD' />
                </div>
                <div className='flex flex-row items-center py-1'>
                    <TechInfo name='Elixir' level='HELLO_WORLD' />
                </div>
                <H2>Frontend</H2>
                <div className='flex flex-row items-center py-1'>
                    <TechInfo name='React' level='ADVANCED' />
                </div>
                <div className='flex flex-row items-center py-1'>
                    <TechInfo name='Next.js' level='BASICS' />
                </div>
                <div className='flex flex-row items-center py-1'>
                    <TechInfo name='Svelte' level='HELLO_WORLD' />
                </div>
                <div className='flex flex-row items-center py-1'>
                    <TechInfo name='SvelteKit' level='HELLO_WORLD' />
                </div>
                <H2>Backend</H2>
                <div className='flex flex-row items-center py-1'>
                    <TechInfo name='NestJS' level='INTERMEDIATE' />
                </div>
                <div className='flex flex-row items-center py-1'>
                    <TechInfo name='Spring' level='INTERMEDIATE' />
                </div>
                <H2>Interests</H2>
                <Topic>clean code</Topic>
                <Topic>clean architecture</Topic>
                <Topic>unit testing</Topic>
                <Topic>design patterns</Topic>
                <Topic>data structures</Topic>
            </main>
            <Footer />
        </>
    );
}
