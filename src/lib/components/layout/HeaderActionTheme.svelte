<script lang="ts">
    import type { Theme } from "$lib/src/types.js";
    import { appTheme } from "../../src/store.js";
    import ThemeDark from "../design/icons/ThemeDark.svelte";
    import ThemeLight from "../design/icons/ThemeLight.svelte";
    import IconButton from "../design/IconButton.svelte";

    let theme: Theme;
    appTheme.subscribe((value) => {
        theme = value;
    });
</script>

<IconButton
    onclick={() => {
        if (theme === "dark") {
            appTheme.set("light");
        } else {
            appTheme.set("dark");
        }
    }}
>
    {#if theme === "dark"}
        <ThemeDark></ThemeDark>
    {:else}
        <ThemeLight></ThemeLight>
    {/if}
</IconButton>
