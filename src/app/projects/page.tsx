import type { JSX } from "react";
import Head from "next/head";
import Link from "next/link";
import { H1 } from "../../components/H1";

type Project = {
    readonly id: string;
    readonly title: string;
}

export default function Projects(): JSX.Element {
    const projects: readonly Project[] = [
        { id: 'game-of-life', title: "Conway's Game Of Life", },
        { id: 'precise-schedule', title: 'Precise Schedule', }
    ];

    return (
        <>
            <Head>
                <title>Projects | João Arthur</title>
            </Head>
            <section className="flex flex-col gap-5">
                {projects.map(project => (
                    <Link href={`/projects/post/${project.id}`} key={project.id}>
                        <div className="px-10 shadow-md bg-slate-100">
                            <H1 className="text-gray-800">
                                {project.title}
                            </H1>
                        </div>
                    </Link>

                ))}
            </section>
        </>
    );
}
