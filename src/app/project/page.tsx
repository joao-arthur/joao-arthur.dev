import type { JSX } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { useHeaderStore } from "../../lib/useHeaderStore";

type Project = {
    readonly id: string;
    readonly title: string;
};

export const metadata: Metadata = {
    title: "Projects | João Arthur",
};

export default function Projects(): JSX.Element {
    const { setPage } = useHeaderStore();
    setPage("project");

    const projects: readonly Project[] = [
        { id: "game-of-life", title: "Conway's Game Of Life" },
        { id: "precise-schedule", title: "Precise Schedule" },
    ];

    return (
        <section className="flex flex-col gap-5">
            {projects.map((project) => (
                <Link href={`/project/post/${project.id}`} key={project.id}>
                    <div className="px-10 shadow-md bg-slate-100">
                        <h1 className="text-2xl pt-4 pb-2 text-gray-800">
                            {project.title}
                        </h1>
                    </div>
                </Link>
            ))}
        </section>
    );
}
