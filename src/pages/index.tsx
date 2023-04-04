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
                    <span style={{ flex: '1 1 0', minWidth: 80 }}>TypeScript</span>
                    <span style={{ flex: '1 1 0', minWidth: 100 }}>advanced</span>
                    <div style={{ flex: '4 1 0', minWidth: 0 }}>
                        <Progress percentual={100} />
                    </div>
                </div>
                <div className='flex flex-row items-center py-1'>
                    <span style={{ flex: '1 1 0', minWidth: 80 }}>Java</span>
                    <span style={{ flex: '1 1 0', minWidth: 100 }}>intermediate</span>
                    <div style={{ flex: '4 1 0', minWidth: 0 }}>
                        <Progress percentual={75} />
                    </div>
                </div>
                <div className='flex flex-row items-center py-1'>
                    <span style={{ flex: '1 1 0', minWidth: 80 }}>Rust</span>
                    <span style={{ flex: '1 1 0', minWidth: 100 }}>basics</span>
                    <div style={{ flex: '4 1 0', minWidth: 0 }}>
                        <Progress percentual={50} />
                    </div>
                </div>
                <div className='flex flex-row items-center py-1'>
                    <span style={{ flex: '1 1 0', minWidth: 80 }}>Zig</span>
                    <span style={{ flex: '1 1 0', minWidth: 100 }}>hello world</span>
                    <div style={{ flex: '4 1 0', minWidth: 0 }}>
                        <Progress percentual={25} />
                    </div>
                </div>
                <div className='flex flex-row items-center py-1'>
                    <span style={{ flex: '1 1 0', minWidth: 80 }}>Elixir</span>
                    <span style={{ flex: '1 1 0', minWidth: 100 }}>hello world</span>
                    <div style={{ flex: '4 1 0', minWidth: 0 }}>
                        <Progress percentual={25} />
                    </div>
                </div>
                <H2>Frontend</H2>
                <div className='flex flex-row items-center py-1'>
                    <span style={{ flex: '1 1 0', minWidth: 80 }}>React</span>
                    <span style={{ flex: '1 1 0', minWidth: 100 }}>advanced</span>
                    <div style={{ flex: '4 1 0', minWidth: 0 }}>
                        <Progress percentual={100} />
                    </div>
                </div>
                <div className='flex flex-row items-center py-1'>
                    <span style={{ flex: '1 1 0', minWidth: 80 }}>Next.js</span>
                    <span style={{ flex: '1 1 0', minWidth: 100 }}>basics</span>
                    <div style={{ flex: '4 1 0', minWidth: 0 }}>
                        <Progress percentual={50} />
                    </div>
                </div>
                <div className='flex flex-row items-center py-1'>
                    <span style={{ flex: '1 1 0', minWidth: 80 }}>Svelte</span>
                    <span style={{ flex: '1 1 0', minWidth: 100 }}>hello world</span>
                    <div style={{ flex: '4 1 0', minWidth: 0 }}>
                        <Progress percentual={25} />
                    </div>
                </div>
                <div className='flex flex-row items-center py-1'>
                    <span style={{ flex: '1 1 0', minWidth: 80 }}>SvelteKit</span>
                    <span style={{ flex: '1 1 0', minWidth: 100 }}>hello world</span>
                    <div style={{ flex: '4 1 0', minWidth: 0 }}>
                        <Progress percentual={25} />
                    </div>
                </div>
                <H2>Backend</H2>
                <div className='flex flex-row items-center py-1'>
                    <span style={{ flex: '1 1 0', minWidth: 80 }}>NestJS</span>
                    <span style={{ flex: '1 1 0', minWidth: 100 }}>intermediate</span>
                    <div style={{ flex: '4 1 0', minWidth: 0 }}>
                        <Progress percentual={75} />
                    </div>
                </div>
                <div className='flex flex-row items-center py-1'>
                    <span style={{ flex: '1 1 0', minWidth: 80 }}>Spring</span>
                    <span style={{ flex: '1 1 0', minWidth: 100 }}>intermediate</span>
                    <div style={{ flex: '4 1 0', minWidth: 0 }}>
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
