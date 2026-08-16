<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
    };

    const { children }: Props = $props();
</script>

<style>
    h1 {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 3rem;
        line-height: 4rem;
        overflow-wrap: break-word;
    }
</style>

<h1>
    {@render children?.()}
</h1>
