import type { Language, Post } from "./types";
import { blog_en_us, blog_pt_br } from "./posts";

function posts_by_language(language: Language) {
    switch (language) {
        case "en-US":
            return blog_en_us;
        case "pt-BR":
            return blog_pt_br;
    }
}

export async function fetch_blog(language: Language): Promise<readonly Post[]> {
    const importedPosts = posts_by_language(language);
    const posts: readonly (Post | undefined)[] = await Promise.all(
        Object.entries(importedPosts).map(
            async ([path, resolver]) => {
                const result = await resolver();
                if (typeof result === "object" && result !== null && "metadata" in result) {
                    const slug = path.split("/").pop()?.split(".").shift() || "";
                    return { ...result.metadata as Post, slug };
                }
                return undefined;
            },
        ),
    );
    return posts.filter((post): post is Post => !!post).toSorted((a, b) =>
        b.created_at.localeCompare(a.created_at)
    );
}
