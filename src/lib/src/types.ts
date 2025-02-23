export type Theme = "dark" | "light";
export type Language = "en-US" | "pt-BR";

export type Post = {
    readonly slug: string;
    readonly created_at: string;
    readonly updated_at: string;
    readonly title: string;
    readonly description: string;
    readonly repository?: string;
    readonly license?: string;
    readonly programming_languages?: readonly string[];
    readonly technologies?: readonly string[];
    readonly img_url?: string;
    readonly app_url?: string;
};
