<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
    };

    const { children }: Props = $props();
</script>

<style>
    h5 {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 1rem;
        line-height: 1.5rem;
    }
</style>

<h5>
    {@render children?.()}
</h5>
