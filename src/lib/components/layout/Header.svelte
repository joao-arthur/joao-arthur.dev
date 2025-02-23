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
        background-color: #ebebeb;
        padding-bottom: 10px;
        padding: 15px 20px;
    }

    :global(.dark) {
        header {
            background-color: #1c1c1c;
        }
    }
</style>

<header>
    <HeaderActions />
    <HeaderNavBar />
</header>
