<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
    };

    const { children }: Props = $props();
</script>

<style>
    h5 {
        color: var(--content-light);
    }

    :global(.dark) {
        h5 {
            color: var(--content-dark);
        }
    }
</style>

<h5>
    {@render children?.()}
</h5>
