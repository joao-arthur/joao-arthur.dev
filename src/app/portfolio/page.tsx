import type { JSX } from "react";
import type { PortfolioPost } from "../../lib/types";
import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { Layout } from "../../components/Layout";

export const metadata: Metadata = {
    title: "Projects | João Arthur",
};

export default async function PortfolioPage(): Promise<JSX.Element> {
    const res = await fetch(globalThis.process.env.URL_PORTFOLIO, { cache: "force-cache" });
    const posts: readonly PortfolioPost[] = await res.json();

    return (
        <Layout.Content>
            {posts.map((project) => (
                <Link key={project.id} href={`/portfolio/post/${project.id}`}>
                    <Card variant="elevation">
                        <CardMedia
                            sx={{ height: 450 }}
                            image={`/images/${project.id}.png`}
                            title={project.name}
                        />
                        <CardContent sx={{height: "12rem"}}>
                            <div className="w-full">
                                <Typography variant="h4">{project.name}</Typography>
                                <Typography variant="h6">{new Date(project.date).toLocaleDateString()}</Typography>
                            </div>
                            <div>
                                {project['languages'].map(lang =>  <Chip key={lang} color="primary" label={lang} sx={{ fontSize: 20 }} />)}
                                {project['stack'].map(tech =>  <Chip key={tech} color="secondary" label={tech} sx={{ fontSize: 20 }} />)}
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </Layout.Content>
    );
}
