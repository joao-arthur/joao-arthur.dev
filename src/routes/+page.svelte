<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import Content from "$lib/components/features/Content.svelte";

    onMount(() => {
        const userLangs = window.navigator.languages.map((l) => l.slice(0, 2));

        let setted = false;

        for (const lang of userLangs) {
            if (lang === "en") {
                setted = true;
                goto("/en-US/about");
                break;
            }
            if (lang === "pt") {
                setted = true;
                goto("/pt-BR/about");
                break;
            }
        }
        if (!setted) {
            goto("/en-US/about");
        }
    });
</script>

<svelte:head>
    <title>João Arthur</title>
</svelte:head>

<Content></Content>
