<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
    };

    const { children }: Props = $props();
</script>

<style>
    div {
        padding: 8px 16px;
    }
</style>

<div>
    {@render children?.()}
</div>
