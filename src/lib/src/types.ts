export type Theme = "dark" | "light";
export type Language = "en-US" | "pt-BR";

export type BlogPost = {
    readonly title: string;
    readonly description: string;
    readonly created_at: string;
    readonly updated_at: string;
    readonly technologies: readonly string[];
}

export type PortfolioPost = {
    readonly title: string;
    readonly description: string;
    readonly license: string;
    readonly repository: string;
    readonly created_at: string;
    readonly updated_at: string;
    readonly languages: readonly string[];
    readonly technologies: readonly string[];
    readonly img_url: string;
    readonly app_url: string;
}
