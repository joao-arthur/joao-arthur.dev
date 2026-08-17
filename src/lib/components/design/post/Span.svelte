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
        color: var(--content-light);
    }

    :global(.dark) {
        span {
            color: var(--content-dark);
        }
    }
</style>

<span>
    {@render children?.()}
</span>
