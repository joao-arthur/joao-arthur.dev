import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { H1 } from '@/components/H1';
import { H2 } from '@/components/H2';
import { Topic } from '@/components/Topic';

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
                <H2>Programming Languages</H2>
                <table className='w-full text-center'>
                    <thead>
                        <th className='w-1/5 invisible'>Name</th>
                        <th className='w-1/5'>Hello World</th>
                        <th className='w-1/5'>Basics</th>
                        <th className='w-1/5'>Intermediate</th>
                        <th className='w-1/5'>Advanced</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-left'>TypeScript</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                        </tr>
                        <tr>
                            <td className='text-left'>Java</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='text-left'>Rust</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='text-left'>Zig</td>
                            <td>✅</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='text-left'>Elixir</td>
                            <td>✅</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <H2>Frontend</H2>
                <table className='w-full text-center'>
                    <thead>
                        <th className='invisible'>Name</th>
                        <th className='w-1/5'>Hello World</th>
                        <th className='w-1/5'>Basics</th>
                        <th className='w-1/5'>Intermediate</th>
                        <th className='w-1/5'>Advanced</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-left'>React</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                        </tr>
                        <tr>
                            <td className='text-left'>Next.js</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='text-left'>Svelte</td>
                            <td>✅</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='text-left'>Sveltekit</td>
                            <td>✅</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <H2>Backend</H2>
                <table className='w-full text-center'>
                    <thead>
                        <th className='invisible'>Name</th>
                        <th className='w-1/5'>Hello World</th>
                        <th className='w-1/5'>Basics</th>
                        <th className='w-1/5'>Intermediate</th>
                        <th className='w-1/5'>Advanced</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-left'>NestJS</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className='text-left'>Spring</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td>✅</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
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
