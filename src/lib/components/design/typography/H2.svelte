<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
    };

    const { children }: Props = $props();
</script>

<style>
    h2 {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 2.5rem;
        line-height: 3rem;
        overflow-wrap: break-word;
    }
</style>

<h2>
    {@render children?.()}
</h2>
