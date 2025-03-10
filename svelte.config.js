import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".md"],
    kit: {
        adapter: adapter(),
    },
    preprocess: [
        vitePreprocess({ script: true }),
        mdsvex({
            layout: "./src/lib/components/layout/PostLayout.svelte",
            extensions: [".md"],
        }),
    ],
};

export default config;
