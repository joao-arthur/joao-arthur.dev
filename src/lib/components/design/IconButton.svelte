<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
        readonly onclick?: () => void;
        readonly title?: string;
    };

    const { children, onclick, title }: Props = $props();
</script>

<style>
    button {
        border: none;
        padding: 0;
        width: 60px;
        height: 60px;
        border-radius: 25px;
        cursor: pointer;
        background-color: var(--color-primary);
    }

    :global(.dark) {
        button {
            background-color: var(--color-primary);
        }
    }
</style>

<button type="button" {onclick} {title}>
    {@render children?.()}
</button>
