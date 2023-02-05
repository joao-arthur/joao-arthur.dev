import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { H1 } from '@/components/H1';
import { H2 } from '@/components/H2';
import { Topic } from '@/components/Topic';
import { Progress } from '@/components/Progress';

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
                    <span className='w-1/6'>TypeScript</span>
                    <span className='w-1/6'>Advanced</span>
                    <div className='w-4/6 text-center'>
                        <Progress percentual={100} />
                    </div>
                </div>
                <div className='flex flex-row items-center py-1'>
                    <span className='w-1/6'>Java</span>
                    <span className='w-1/6'>Intermediate</span>
                    <div className='w-4/6 text-center'>
                        <Progress percentual={75} />
                    </div>
                </div>
                <div className='flex flex-row items-center py-1'>
                    <span className='w-1/6'>Rust</span>
                    <span className='w-1/6'>Basics</span>
                    <div className='w-4/6 text-center'>
                        <Progress percentual={50} />
                    </div>
                </div>
                <div className='flex flex-row items-center py-1'>
                    <span className='w-1/6'>Zig</span>
                    <span className='w-1/6'>Hello World</span>
                    <div className='w-4/6 text-center'>
                        <Progress percentual={25} />
                    </div>
                </div>
                <div className='flex flex-row items-center py-1'>
                    <span className='w-1/6'>Elixir</span>
                    <span className='w-1/6'>Hello World</span>
                    <div className='w-4/6 text-center'>
                        <Progress percentual={25} />
                    </div>
                </div>
                <H2>Frontend</H2>
                <div className='flex flex-row items-center py-1'>
                    <span className='w-1/6'>React</span>
                    <span className='w-1/6'>Advanced</span>
                    <div className='w-4/6 text-center'>
                        <Progress percentual={100} />
                    </div>
                </div>
                <div className='flex flex-row items-center py-1'>
                    <span className='w-1/6'>Next.js</span>
                    <span className='w-1/6'>Basics</span>
                    <div className='w-4/6 text-center'>
                        <Progress percentual={50} />
                    </div>
                </div>
                <div className='flex flex-row items-center py-1'>
                    <span className='w-1/6'>Svelte</span>
                    <span className='w-1/6'>Hello World</span>
                    <div className='w-4/6 text-center'>
                        <Progress percentual={25} />
                    </div>
                </div>
                <div className='flex flex-row items-center py-1'>
                    <span className='w-1/6'>Sveltekit</span>
                    <span className='w-1/6'>Hello World</span>
                    <div className='w-4/6 text-center'>
                        <Progress percentual={25} />
                    </div>
                </div>
                <H2>Backend</H2>
                <div className='flex flex-row items-center py-1'>
                    <span className='w-1/6'>NestJS</span>
                    <span className='w-1/6'>Intermediate</span>
                    <div className='w-4/6 text-center'>
                        <Progress percentual={75} />
                    </div>
                </div>
                <div className='flex flex-row items-center py-1'>
                    <span className='w-1/6'>Spring</span>
                    <span className='w-1/6'>Intermediate</span>
                    <div className='w-4/6 text-center'>
                        <Progress percentual={75} />
                    </div>
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
