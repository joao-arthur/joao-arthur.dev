<script lang="ts">
    import Header from "$lib/components/layout/Header.svelte";
    import Footer from "$lib/components/layout/Footer.svelte";
    import { appLanguage, appTheme } from "$lib/src/store.js";
    import { onMount } from "svelte";
    import { page } from "$app/state";

    let { data, children } = $props();

    onMount(() => {
        let eriofher = new URL(page.url).pathname;
        if (eriofher.startsWith("/en-US")) {
            appLanguage.set("en-US");
        } else if (eriofher.startsWith("/pt-BR")) {
            appLanguage.set("pt-BR");
        } else {
            const userLangs = window.navigator.languages.map((l) => l.slice(0, 2));

            let setted = false;

            for (const lang of userLangs) {
                if (lang === "en") {
                    setted = true;
                    appLanguage.set("en-US");
                    break;
                }
                if (lang === "pt") {
                    setted = true;
                    appLanguage.set("pt-BR");
                    break;
                }
            }
            if (!setted) {
                appLanguage.set("en-US");
            }
        }
    });

    appTheme.subscribe((value) => {
        if (value === "dark") {
            globalThis.document?.body?.classList?.add("dark");
        } else {
            globalThis.document?.body?.classList?.remove("dark");
        }
    });
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="/css/global.css"
    />
    <link
        rel="alternate"
        type="application/rss+xml"
        title="João Arthur"
        href="http://joao-arthur.dev/api/rss.xml"
    />
</svelte:head>

<style>
    main {
        background-color: white;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        min-width: 0;
    }

    :global(.dark) {
        main {
            background-color: black;
        }
    }

    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-items: center;
    }
</style>

{#key data.path}
    <main id="main" tabindex="-1">
        <section>
            <Header />
            {@render children?.()}
            <Footer />
        </section>
    </main>
{/key}
