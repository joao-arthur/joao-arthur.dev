<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
    };

    const { children }: Props = $props();
</script>

<style>
    h3 {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 2rem;
        line-height: 2.5rem;
    }
</style>

<h3>
    {@render children?.()}
</h3>
