<script lang="ts">
    import { theme } from "$lib/assets/js/store";
    import ThemeDark from "../icons/ThemeDark.svelte";
    import ThemeLight from "../icons/ThemeLight.svelte";
    import Person from "../icons/Person.svelte";
    import Computer from "../icons/Computer.svelte";
    import RSS from "../icons/RSS.svelte";
    import Translate from "../icons/Translate.svelte";
    import ArrowBack from "../icons/ArrowBack.svelte";
    import H2 from "../typography/H2.svelte";
    import HeaderNavItem from "./HeaderNavItem.svelte";
    import IconButton from "../design/IconButton.svelte";

    let currTheme;

    theme.subscribe((value) => {
        currTheme = value;
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
            <IconButton onclick={() => {}}>
                <ArrowBack></ArrowBack>
            </IconButton>
        </div>
        <div style="flex: 1 1 0; min-width: 0px;"></div>
        <div class="contentright">
            <IconButton
                onclick={() => {
                    if (currTheme === "dark") {
                        theme.set("light");
                    } else {
                        theme.set("dark");
                    }
                }}
            >
                {#if currTheme === "dark"}
                    <ThemeDark></ThemeDark>
                {:else}
                    <ThemeLight></ThemeLight>
                {/if}
            </IconButton>
            <IconButton onclick={() => {}}>
                <Translate></Translate>
            </IconButton>
        </div>
    </div>
    <div class="containerNavBar">
        <HeaderNavItem href="/about">
            <Person size={35}></Person>
            <H2>About</H2>
        </HeaderNavItem>
        <HeaderNavItem href="/portfolio">
            <Computer size={35}></Computer>
            <H2>Portfolio</H2>
        </HeaderNavItem>
        <HeaderNavItem href="/blog">
            <RSS size={35}></RSS>
            <H2>Blog</H2>
        </HeaderNavItem>
    </div>
</header>
