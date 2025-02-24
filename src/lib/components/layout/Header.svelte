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
        background-color: var(--color-prm-90);
    }

    :global(.dark) {
        header {
            background-color: var(--color-prm-10);
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
