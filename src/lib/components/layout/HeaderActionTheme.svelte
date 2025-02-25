<script lang="ts">
    import type { Language, Theme } from "$lib/src/types.js";
    import { appTheme } from "../../src/store.js";
    import ThemeDark from "../design/icons/ThemeDark.svelte";
    import ThemeLight from "../design/icons/ThemeLight.svelte";
    import IconButton from "../design/IconButton.svelte";
    import { page } from "$app/state";
    import { m } from "$lib/src/i18n/m.js";

    let theme: Theme;
    appTheme.subscribe((value) => {
        theme = value;
    });
    const pathname = new URL(page.url).pathname;
    const language = (function get_language(): Language {
        if (pathname.startsWith("/en-US")) {
            return "en-US";
        }
        if (pathname.startsWith("/pt-BR")) {
            return "pt-BR";
        }
        return "en-US";
    })();
    const locale = m(language);
</script>

<IconButton
    onclick={() => {
        if (theme === "dark") {
            appTheme.set("light");
        } else {
            appTheme.set("dark");
        }
    }}
    title={theme === "dark" ? locale.header_title_dark_theme : locale.header_title_light_theme}
>
    {#if theme === "dark"}
        <ThemeDark></ThemeDark>
    {:else}
        <ThemeLight></ThemeLight>
    {/if}
</IconButton>
