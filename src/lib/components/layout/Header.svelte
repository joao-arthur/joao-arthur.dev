<script lang="ts">
    import { page } from "$app/state";
    import { appLanguage, appTheme } from "../../src/store.js";
    import ThemeDark from "../design/icons/ThemeDark.svelte";
    import ThemeLight from "../design/icons/ThemeLight.svelte";
    import Person from "../design/icons/Person.svelte";
    import Computer from "../design/icons/Computer.svelte";
    import RSS from "../design/icons/RSS.svelte";
    import Translate from "../design/icons/Translate.svelte";
    import ArrowBack from "../design/icons/ArrowBack.svelte";
    import H2 from "../design/typography/H2.svelte";
    import HeaderNavItem from "./HeaderNavItem.svelte";
    import IconButton from "../design/IconButton.svelte";
    import { goto } from "$app/navigation";

    let currTheme;
    let currLang;
    let component = null;

    appTheme.subscribe((value) => {
        currTheme = value;
    });
    appLanguage.subscribe((value) => {
        currLang = value;
    });
</script>

<style>
    header {
        background-color: #ebebeb;
        padding-bottom: 10px;
        padding: 15px 20px;
    }

    :global(.dark) {
        header {
            background-color: #1c1c1c;
        }
    }

    .containerAux {
        display: flex;
    }

    .contentleft {
        column-gap: 8px;
    }

    .contentright {
        display: flex;
        column-gap: 8px;
    }

    .containerNavBar {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
    }
</style>

<header>
    <div class="containerAux">
        <div class="contentleft">
            {#if page.url.pathname.startsWith("/portfolio/") ||
                    page.url.pathname.startsWith("/blog/")}
                <IconButton
                    onclick={() => {
                        history.back();
                    }}
                >
                    <ArrowBack></ArrowBack>
                </IconButton>
            {/if}
        </div>
        <div style="flex: 1 1 0; min-width: 0px"></div>
        <div class="contentright">
            <IconButton
                onclick={() => {
                    if (currTheme === "dark") {
                        appTheme.set("light");
                    } else {
                        appTheme.set("dark");
                    }
                }}
            >
                {#if currTheme === "dark"}
                    <ThemeDark></ThemeDark>
                {:else}
                    <ThemeLight></ThemeLight>
                {/if}
            </IconButton>
            <IconButton
                onclick={() => {
                    component.showModal();
                }}
            >
                <Translate></Translate>
            </IconButton>
            <dialog bind:this={component}>
                <button
                    onclick={() => {
                        component.close();
                    }}
                >
                    Close
                </button>
                <div style="display: flex; flex-direction: column">
                    <button
                        disabled={currLang === "en-US"}
                        onclick={() => {
                            appLanguage.set("en-US");
                            goto(`/en-US/${page.url.pathname.slice(7)}`);
                        }}
                    >
                        English
                    </button>
                    <button
                        disabled={currLang === "pt-BR"}
                        onclick={() => {
                            appLanguage.set("pt-BR");
                            goto(`/pt-BR/${page.url.pathname.slice(7)}`);
                        }}
                    >
                        Português
                    </button>
                </div>
            </dialog>
        </div>
    </div>
    <div class="containerNavBar">
        <HeaderNavItem
            href={`/${currLang}/about`}
            disabled={page.url.pathname === `/${currLang}/about`}
        >
            <Person size={35}></Person>
            <H2 inherit={page.url.pathname === `/${currLang}/about`}>
                {#if currLang === "en-US"}
                    About
                {/if}
                {#if currLang === "pt-BR"}
                    Sobre
                {/if}
            </H2>
        </HeaderNavItem>
        <HeaderNavItem
            href={`/${currLang}/portfolio`}
            disabled={page.url.pathname === `/${currLang}/portfolio`}
        >
            <Computer size={35}></Computer>
            <H2 inherit={page.url.pathname === `/${currLang}/portfolio`}>
                {#if currLang === "en-US"}
                    Portfolio
                {/if}
                {#if currLang === "pt-BR"}
                    Portifólio
                {/if}
            </H2>
        </HeaderNavItem>
        <HeaderNavItem
            href={`/${currLang}/blog`}
            disabled={page.url.pathname === `/${currLang}/blog`}
        >
            <RSS size={35}></RSS>
            <H2 inherit={page.url.pathname === `/${currLang}/blog`}>Blog</H2>
        </HeaderNavItem>
    </div>
</header>
