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
        padding-bottom: 10px;
        padding: 15px 20px;
        gap: 1rem;
        background-color: var(--surface-light);
        color: var(--content-light);
    }

    :global(.dark) {
        header {
            background-color: var(--surface-dark);
            color: var(--content-dark);
        }
    }
</style>

<header>
    <HeaderNavBar />
    <HeaderActions />
</header>
