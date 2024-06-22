import type { JSX } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Card } from "../../components/Card";
import { Title } from "../../components/Title";
import { SubTitle } from "../../components/SubTitle";

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
        <section className="w-full min-h-full flex flex-col gap-y-10 max-w-200 px-10">
            {projects.map((project) => (
                <Link key={project.id} href={`/portfolio/post/${project.id}`}>
                    <div className="grow-1 shrink-1 max-w-200 min-w-0">
                        <Card>
                            <div className="h-40 w-full">
                                <Title label={project.name} />
                                <SubTitle label={project.date} />
                            </div>
                        </Card>
                    </div>
                </Link>
            ))}
        </section>
    );
}
