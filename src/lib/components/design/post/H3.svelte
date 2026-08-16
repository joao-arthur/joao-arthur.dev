<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
    };

    const { children }: Props = $props();
</script>

<style>
    h3 {
        font-weight: bold;
        font-size: 2rem;
        line-height: 1rem;
        color: black;
    }

    :global(.dark) {
        h3 {
            color: white;
        }
    }
</style>

<h3>
    {@render children?.()}
</h3>
