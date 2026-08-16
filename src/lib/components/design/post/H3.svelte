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
        color: var(--color-content-light);
    }

    :global(.dark) {
        h3 {
            color: var(--color-content-dark);
        }
    }
</style>

<h3>
    {@render children?.()}
</h3>
