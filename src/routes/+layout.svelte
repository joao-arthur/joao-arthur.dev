<script lang="ts">
    import Header from "$lib/components/features/Header.svelte";
    import Footer from "$lib/components/features/Footer.svelte";
    import { language, theme } from "$lib/assets/js/store";
    import { onMount } from "svelte";
    import { page } from "$app/state";

    let { data, children } = $props();

  
    onMount(() => {
        console.log();
        let eriofher = new URL(page.url).pathname;
        if (eriofher.startsWith("/en-US")) {
            language.set("en-US");
            
        } else if ( eriofher.startsWith("/pt-BR")) {
            language.set("pt-BR");

        } else {
            
                    const userLangs = window.navigator.languages.map(l => l.slice(0, 2));
                    
                    let setted = false;
            
                    for (const lang of userLangs) {
                        if (lang ==="en") {
                            setted = true;
                            language.set("en-US");
                            break;
                        }
                        if (lang ==="pt") {
                            setted = true;
                            language.set("pt-BR");
                            break;
                        }
                    }
                    if (!setted) {
                        language.set("en-US");
                    }
        }
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
