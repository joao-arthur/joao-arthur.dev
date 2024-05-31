import type { JSX } from "react";
import { Metadata } from "next";
import Link from "next/link";

type Project = {
    readonly id: string;
    readonly title: string;
    readonly date: string;
};

export const metadata: Metadata = {
    title: "Projects | João Arthur",
};

export default function Blog(): JSX.Element {
    const projects: readonly Project[] = [
        { id: "precise-schedule", title: "Precise Schedule", date: "2023-08-11" },
        { id: "game-of-life", title: "Conway's Game Of Life", date: "2023-05-07" },
    ];

    return (
        <section className="flex flex-col items-center gap-y-5 w-full h-full">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="flex flex-col w-full max-w-200 p-5 overflow-hidden"
                >
                    <Link href={`/project/post/${project.id}`}>
                        <div className="grow-1 shrink-1 max-w-200 min-w-0 h-40 mx-2 p-5 shadow-md bg-slate-100">
                            <h1 className="text-2xl text-gray-800">
                                {project.title}
                            </h1>
                            <span className="text-gray-600">
                                {project.date}
                            </span>
                        </div>
                    </Link>
                </div>
            ))}
        </section>
    );
}
