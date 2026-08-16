<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
    };

    const { children }: Props = $props();
</script>

<style>
    h2 {
        font-weight: bold;
        font-size: 2.5rem;
        line-height: 3rem;
        color: black;
    }

    :global(.dark) {
        h2 {
            color: white;
        }
    }
</style>

<h2>
    {@render children?.()}
</h2>
