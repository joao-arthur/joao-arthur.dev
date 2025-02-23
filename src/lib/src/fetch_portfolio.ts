import type { Language, Post } from "./types";
import { portfolio_en_us, portfolio_pt_br } from "./posts";

function posts_by_language(language: Language) {
    switch (language) {
        case "en-US":
            return portfolio_en_us;
        case "pt-BR":
            return portfolio_pt_br;
    }
}

export async function fetch_portfolio(language: Language): Promise<readonly Post[]> {
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
