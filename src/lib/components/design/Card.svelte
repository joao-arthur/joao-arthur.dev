<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
        readonly title?: string;
    };

    const { children, title }: Props = $props();
</script>

<style>
    li {
        max-width: 800px;
        min-width: 0px;
        border-radius: 20px;
        overflow: hidden;
        list-style: none;
        background-color: var(--color-prm-86);
    }

    :global(.dark) {
        li {
            background-color: var(--color-prm-14);
        }
    }
</style>

<li {title}>
    {@render children?.()}
</li>
