import type { JSX } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { useHeaderStore } from "../../lib/useHeaderStore";

type Project = {
    readonly id: string;
    readonly title: string;
    readonly date: string;
};

export const metadata: Metadata = {
    title: "Projects | João Arthur",
};

export default function Projects(): JSX.Element {
    const { setPage } = useHeaderStore();
    setPage("project");

    const projects: readonly Project[] = [
        { id: "game-of-life", title: "Conway's Game Of Life", date: '2023-05-07' },
        { id: "precise-schedule", title: "Precise Schedule", date: '2023-08-11' },
    ];

    return (
        <section className="flex flex-col items-center gap-y-5">
            {projects.map((project) => (
                <Link key={project.id} href={`/project/post/${project.id}`}>
                    <div className="w-200 h-40 p-5 rounded-xl shadow-md bg-slate-100">
                        <h1 className="text-2xl text-gray-800">
                            {project.title}
                        </h1>
                        <span className="text-gray-600">
                            {project.date}
                        </span>
                    </div>
                </Link>
            ))}
        </section>
    );
}
