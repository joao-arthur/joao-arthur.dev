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
        color: black;
        text-align: justify;
    }

    :global(.dark) {
        p {
            color: white;
        }
    }
</style>

<p>
    {@render children?.()}
</p>
