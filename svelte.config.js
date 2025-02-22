import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".md"],

    kit: {
        adapter: adapter(),
        prerender: {
            entries: ["*"],
        },
    },

    preprocess: [
        mdsvex({
            extensions: [".md"],
            rehypePlugins: [
                rehypeSlug,
                rehypeAutolinkHeadings,
            ],
        }),
    ],
};

export default config;
