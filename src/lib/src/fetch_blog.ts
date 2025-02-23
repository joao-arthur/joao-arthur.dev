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
    const posts = await Promise.all(
        Object.entries(importedPosts).map(
            async ([path, resolver]) => {
                const { metadata } = await resolver();
                const slug = path.split(/[\/|\.]/).at(-2);
                return { ...metadata, slug };
            },
        ),
    );
    posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    return posts;
}
