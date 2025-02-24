<script lang="ts">
    import type { Theme } from "$lib/src/types.js";
    import { appTheme } from "../../src/store.js";
    import HeaderNavBar from "./HeaderNavBar.svelte";
    import HeaderActions from "./HeaderActions.svelte";

    let currTheme: Theme;

    appTheme.subscribe((value) => {
        currTheme = value;
    });
</script>

<style>
    header {
        display: flex;
        flex-direction: row;
        background-color: #ebebeb;
        padding-bottom: 10px;
        padding: 15px 20px;
        gap: 1rem;
    }

    :global(.dark) {
        header {
            background-color: #1c1c1c;
        }
    }

    @media (max-width: 450px) {
        header {
            flex-direction: column;
        }
    }
</style>

<header>
    <HeaderNavBar />
    <HeaderActions />
</header>
