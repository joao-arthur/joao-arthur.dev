<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
    };

    const { children }: Props = $props();
</script>

<style>
    h6 {
        color: black;
    }

    :global(.dark) {
        h6 {
            color: white;
        }
    }
</style>

<h6>
    {@render children?.()}
</h6>
