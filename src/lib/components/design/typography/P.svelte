<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
        readonly justify?: boolean;
    };

    const { children, justify = false }: Props = $props();
</script>

<style>
    p {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2rem;
        color: var(--color-prm-30);
    }

    :global(.dark) {
        p {
            color: var(--color-prm-70);
        }
    }

    .justify {
        text-align: justify;
    }
</style>

<p class={justify ? "justify" : ""}>
    {@render children?.()}
</p>
