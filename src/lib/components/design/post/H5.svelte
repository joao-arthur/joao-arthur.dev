<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
    };

    const { children }: Props = $props();
</script>

<style>
    h5 {
        color: black;
    }

    :global(.dark) {
        h5 {
            color: white;
        }
    }
</style>

<h5>
    {@render children?.()}
</h5>
