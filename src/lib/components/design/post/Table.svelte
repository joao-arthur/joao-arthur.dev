<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
    };

    const { children }: Props = $props();
</script>

<style>
    table {
        margin: 2rem 0;
        width: 100%;
        border-collapse: collapse;
    }
</style>

<table>
    {@render children?.()}
</table>
