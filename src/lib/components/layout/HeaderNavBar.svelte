<script lang="ts">
    import type { Language } from "$lib/src/types";
    import { page } from "$app/state";
    import Person from "../design/icons/Person.svelte";
    import Computer from "../design/icons/Computer.svelte";
    import RSS from "../design/icons/RSS.svelte";
    import H2 from "../design/typography/H2.svelte";
    import HeaderNavItem from "./HeaderNavItem.svelte";
    import { m } from "$lib/src/i18n/m.js";

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

<style>
    div {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
    }
</style>

<div>
    <HeaderNavItem href={`/${language}/about`} disabled={page.url.pathname.endsWith("about")}>
        <Person size={35}></Person>
        <H2 inherit={page.url.pathname === `/${language}/about`}>
            {locale.header_about}
        </H2>
    </HeaderNavItem>
    <HeaderNavItem
        href={`/${language}/portfolio/`}
        disabled={page.url.pathname.endsWith("portfolio")}
    >
        <Computer size={35}></Computer>
        <H2 inherit={page.url.pathname === `/${language}/portfolio`}>
            {locale.header_portfolio}
        </H2>
    </HeaderNavItem>
    <HeaderNavItem href={`/${language}/blog/`} disabled={page.url.pathname.endsWith("blog")}>
        <RSS size={35}></RSS>
        <H2 inherit={page.url.pathname === `/${language}/blog`}>
            {locale.header_blog}
        </H2>
    </HeaderNavItem>
</div>
