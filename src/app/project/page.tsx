import type { JSX } from "react";
import { Metadata } from "next";
import { Card } from "../../components/Card";
import Link from "next/link";

type Project = {
    readonly id: string;
    readonly name: string;
    readonly date: string;
};

export const metadata: Metadata = {
    title: "Projects | João Arthur",
};

export default function Blog(): JSX.Element {
    const projects: readonly Project[] = [
        { id: "precise-schedule", name: "Precise Schedule", date: "2023-08-11" },
        { id: "game-of-life", name: "Conway's Game Of Life", date: "2023-05-07" },
    ];

    return (
        <section className="flex flex-col items-center gap-y-5 w-full h-full">
            {projects.map((project) => (
                <div key={project.id} className="flex flex-col w-full max-w-200 p-5">
                    <Link href={`/project/post/${project.id}`}>
                        <div className="grow-1 shrink-1 max-w-200 min-w-0 mx-2">
                            <Card>
                                <div className="h-40 w-full">
                                    <h1 className="text-2xl text-teal-900 font-bold">
                                        {project.name}
                                    </h1>
                                    <h2 className="text-teal-900">
                                        {project.date}
                                    </h2>
                                </div>
                            </Card>
                        </div>
                    </Link>
                </div>
            ))}
        </section>
    );
}
