import type { JSX } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Typo } from "../../components/Typo";
import { Layout } from "../../components/Layout";

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
        <Layout.Content>
            {projects.map((project) => (
                <Link key={project.id} href={`/portfolio/post/${project.id}`}>
                    <div className="grow-1 shrink-1 max-w-200 min-w-0">
                        <Layout.Card>
                            <div className="h-40 w-full">
                                <Typo.Title label={project.name} />
                                <Typo.SubTitle label={project.date} />
                            </div>
                        </Layout.Card>
                    </div>
                </Link>
            ))}
        </Layout.Content>
    );
}
