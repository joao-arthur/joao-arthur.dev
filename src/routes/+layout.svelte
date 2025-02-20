<script lang="ts">
    import Header from "$lib/components/features/Header.svelte";
    import Footer from "$lib/components/features/Footer.svelte";
    import { preloadCode } from "$app/navigation";
    import { onMount } from "svelte";
    import { theme } from "$lib/assets/js/store";

    let { data, children } = $props();

    onMount(() => {
        preloadCode("/about");
        preloadCode("/portfolio");
        preloadCode("/blog");
    });

    theme.subscribe((value) => {
        if (value === "dark") {
            globalThis.document?.body?.classList?.add("dark");
        } else {
            globalThis.document?.body?.classList?.remove("dark");
        }
    });
</script>

<svelte:head>
    <link rel="stylesheet" href="/css/global.css" />

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
