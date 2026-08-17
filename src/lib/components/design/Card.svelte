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
        background-color: var(--surface-light);
    }

    :global(.dark) {
        li {
            background-color: var(--surface-dark);
        }
    }
</style>

<li {title}>
    {@render children?.()}
</li>
