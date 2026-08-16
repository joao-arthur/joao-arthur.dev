<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
        readonly disabled?: boolean;
    };

    const { children, disabled = false }: Props = $props();
</script>

<style>
    h4 {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 2rem;
        color: var(--color-prm-30);
    }

    :global(.dark) {
        h4 {
            color: var(--color-prm-70);
        }
    }
</style>

<h4 class={disabled ? "disabled" : ""}>
    {@render children?.()}
</h4>
