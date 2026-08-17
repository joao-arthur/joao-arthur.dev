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
        line-height: 1rem;
        color: var(--content-light);
    }

    :global(.dark) {
        h2 {
            color: var(--content-dark);
        }
    }
</style>

<h2>
    {@render children?.()}
</h2>
