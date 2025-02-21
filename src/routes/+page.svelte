<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { language } from '$lib/assets/js/store';
  
    onMount(() => {
        const userLangs = window.navigator.languages.map(l => l.slice(0, 2));
        
        let setted = false;

        for (const lang of userLangs) {
            if (lang ==="en") {
                setted = true;
                language.set("en-US");
                goto("/en-US/about");
                break;
            }
            if (lang ==="pt") {
                setted = true;
                language.set("pt-BR");
                goto("/pt-BR/about");
                break;
            }
        }
        if (!setted) {
            language.set("en-US");
            goto("/en-US/about");
        }
    });
  </script>

<svelte:head>
    <title>João Arthur</title>
</svelte:head>
