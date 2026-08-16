<script lang="ts">
    import { appTheme } from "../../src/store.js";
    import ThemeDark from "../design/icons/ThemeDark.svelte";
    import ThemeLight from "../design/icons/ThemeLight.svelte";
    import IconButton from "../design/IconButton.svelte";
    import { page } from "$app/state";
    import { m } from "$lib/src/i18n/m.js";
    import { get_language } from "$lib/src/getLanguage.js";

    const locale = $derived(m(get_language(page.url.pathname)));
</script>

<IconButton
    onclick={() => {
        if ($appTheme === "dark") {
            appTheme.set("light");
        } else {
            appTheme.set("dark");
        }
    }}
    title={$appTheme === "dark" ? locale.header_title_dark_theme : locale.header_title_light_theme}
>
    {#if $appTheme === "dark"}
        <ThemeDark></ThemeDark>
    {:else}
        <ThemeLight></ThemeLight>
    {/if}
</IconButton>
