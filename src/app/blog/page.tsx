import type { JSX } from "react";
import type { BlogPost } from "../../lib/types";
import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, Typography } from "@mui/material";
import { Layout } from "../../components/Layout";

export const metadata: Metadata = {
    title: "Blog | João Arthur",
};

export default async function BlogPage(): Promise<JSX.Element> {
    const posts: readonly BlogPost[] = await fetch(
        "https://raw.githubusercontent.com/joao-arthur/assets/main/blog.json",
        { cache: "force-cache" },
    ).then((res) => res.json());

    return (
        <Layout.Content>
            {posts.map((post) => (
                <Link key={post.id} href={`/blog/post/${post.id}`}>
                    <Card variant="elevation">
                        <CardContent>
                            <div className="h-40 w-full">
                                <Typography variant="h4">{post.name.en}</Typography>
                                <Typography variant="h6">{post.date}</Typography>
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </Layout.Content>
    );
}
