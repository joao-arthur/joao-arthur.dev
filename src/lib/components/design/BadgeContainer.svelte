<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
    };

    const { children }: Props = $props();
</script>

<style>
    div {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        padding-top: 8px;
        padding-bottom: 8px;
        align-items: center;
    }
</style>

<div>
    {@render children?.()}
</div>
