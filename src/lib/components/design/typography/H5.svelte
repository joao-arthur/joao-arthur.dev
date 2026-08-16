<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
        readonly disabled?: boolean;
    };

    const { children, disabled = false }: Props = $props();
</script>

<style>
    h5 {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 1rem;
        line-height: 1.5rem;
        color: var(--color-prm-30);
    }

    :global(.dark) {
        h5 {
            color: var(--color-prm-70);
        }
    }
</style>

<h5 class={disabled ? "disabled" : ""}>
    {@render children?.()}
</h5>
