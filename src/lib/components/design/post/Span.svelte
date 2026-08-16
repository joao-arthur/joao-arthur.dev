<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
    };

    const { children }: Props = $props();
</script>

<style>
    span {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 1.5rem;
        color: var(--color-content-light);
    }

    :global(.dark) {
        span {
            color: var(--color-content-dark);
        }
    }
</style>

<span>
    {@render children?.()}
</span>
