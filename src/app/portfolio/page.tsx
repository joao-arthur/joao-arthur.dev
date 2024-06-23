import type { JSX } from "react";
import type { Post } from "../../lib/types";
import { Metadata } from "next";
import Link from "next/link";
import { Typo } from "../../components/Typo";
import { Layout } from "../../components/Layout";

export const metadata: Metadata = {
    title: "Projects | João Arthur",
};

export default async function PortfolioPage(): Promise<JSX.Element> {
    const posts: readonly Post[] = await fetch(
        "https://raw.githubusercontent.com/joao-arthur/assets/main/portfolio.json",
        { cache: "force-cache" },
    ).then((res) => res.json());

    return (
        <Layout.Content>
            {posts.map((project) => (
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
