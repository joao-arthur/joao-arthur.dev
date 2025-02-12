import type { JSX } from "react";
import type { BlogPost } from "../../lib/types";
import { Metadata } from "next";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Layout } from "../../components/Layout";

export const metadata: Metadata = {
    title: "Blog | João Arthur",
};

export default async function BlogPage(): Promise<JSX.Element> {
    const res = await fetch(globalThis.process.env.URL_BLOG, { cache: "force-cache" });
    const posts: readonly BlogPost[] = await res.json();

    return (
        <Layout.Content>
            {posts.map((post) => (
                <Link key={post.id} href={`/blog/post/${post.id}`}>
                    <Card variant="elevation">
                        <CardContent>
                            <div className="min-h-40 w-full">
                                <Typography variant="h4">{post.name.en}</Typography>
                                <Typography variant="h6">
                                    {new Date(post.date).toLocaleDateString()}
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </Layout.Content>
    );
}
