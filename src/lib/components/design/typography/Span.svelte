<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
    };

    const { children }: Props = $props();
</script>

<style>
    span {
        display: flex;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2rem;
        align-items: center;
    }
</style>

<span>
    {@render children?.()}
</span>
