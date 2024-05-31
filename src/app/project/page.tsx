import type { JSX } from "react";
import { Metadata } from "next";
import { Card } from "../../components/Card";

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
                <Card
                    key={project.id}
                    title={project.name}
                    subTitle={project.date}
                    href={`/project/post/${project.id}`}
                />
            ))}
        </section>
    );
}
