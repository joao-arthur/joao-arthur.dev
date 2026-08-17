<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
    };

    const { children }: Props = $props();
</script>

<style>
    p {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 1.75rem;
        color: var(--content-light);
        text-align: justify;
    }

    :global(.dark) {
        p {
            color: var(--content-dark);
        }
    }
</style>

<p>
    {@render children?.()}
</p>
