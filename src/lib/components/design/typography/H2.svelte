<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
        readonly disabled?: boolean;
    };

    const { children, disabled = false }: Props = $props();
</script>

<style>
    h2 {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 2.5rem;
        line-height: 3rem;
        overflow-wrap: break-word;
        color: var(--color-prm-30);
    }

    .disabled {
        color: var(--color-sec-50);
    }

    :global(.dark) {
        h2 {
            color: var(--color-prm-70);
        }

        .disabled {
            color: var(--color-sec-70);
        }
    }
</style>

<h2 class={disabled ? "disabled" : ""}>
    {@render children?.()}
</h2>
