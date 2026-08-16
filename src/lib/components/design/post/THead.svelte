<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
    };

    const { children }: Props = $props();
</script>

<style>
    thead {
        text-align: left;
    }
</style>

<thead>
    {@render children?.()}
</thead>
