<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
    };

    const { children }: Props = $props();
</script>

<style>
    h4 {
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 1rem;
        color: black;
    }

    :global(.dark) {
        h4 {
            color: white;
        }
    }
</style>

<h4>
    {@render children?.()}
</h4>
