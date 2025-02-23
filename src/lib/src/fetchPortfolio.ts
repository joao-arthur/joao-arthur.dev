import type { Language, Post } from "./types";
import { portfolio_en_us, portfolio_pt_br } from "./posts";

function postsByLanguage(language: Language) {
    switch (language) {
        case "en-US":
            return portfolio_en_us;
        case "pt-BR":
            return portfolio_pt_br;
    }
}

export async function fetchPortfolio(language: Language): Promise<readonly Post[]> {
    const importedPosts = postsByLanguage(language);
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
