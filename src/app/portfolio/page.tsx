import type { JSX } from "react";
import type { PortfolioPost } from "../../lib/types";
import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, Typography } from "@mui/material";
import { Layout } from "../../components/Layout";

export const metadata: Metadata = {
    title: "Projects | João Arthur",
};

export default async function PortfolioPage(): Promise<JSX.Element> {
    const posts: readonly PortfolioPost[] = await fetch(
        "https://raw.githubusercontent.com/joao-arthur/assets/main/portfolio.json",
        { cache: "force-cache" },
    ).then((res) => res.json());

    return (
        <Layout.Content>
            {posts.map((project) => (
                <Link key={project.id} href={`/portfolio/post/${project.id}`}>
                    <div className="grow-1 shrink-1 max-w-200 min-w-0">
                        <Card variant="elevation">
                            <CardContent>
                                <div className="h-40 w-full">
                                    <Typography variant="h4">{project.name}</Typography>
                                    <Typography variant="h6">{project.date}</Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Link>
            ))}
        </Layout.Content>
    );
}
