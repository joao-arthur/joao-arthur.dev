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
        background-color: var(--color-surface-light);
        color: var(--color-content-light);
    }

    :global(.dark) {
        header {
            background-color: var(--color-surface-dark);
            color: var(--color-content-dark);
        }
    }
</style>

<header>
    <HeaderNavBar />
    <HeaderActions />
</header>
