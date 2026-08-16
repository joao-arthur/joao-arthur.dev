<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
    };

    const { children }: Props = $props();
</script>

<style>
    h4 {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 2rem;
    }
</style>

<h4>
    {@render children?.()}
</h4>
