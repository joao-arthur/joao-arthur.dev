<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
    };

    const { children }: Props = $props();
</script>

<style>
    h1 {
        font-weight: bold;
        font-size: 3rem;
        line-height: 4rem;
        color: var(--color-content-light);
    }

    :global(.dark) {
        h1 {
            color: var(--color-content-dark);
        }
    }
</style>

<h1>
    {@render children?.()}
</h1>
