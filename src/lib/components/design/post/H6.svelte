<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
    };

    const { children }: Props = $props();
</script>

<style>
    h6 {
        color: var(--color-content-light);
    }

    :global(.dark) {
        h6 {
            color: var(--color-content-dark);
        }
    }
</style>

<h6>
    {@render children?.()}
</h6>
