<script lang="ts">
    const { children, justify = false } = $props();
</script>

<style>
    p {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2rem;
        color: var(--color-green-20);
    }

    :global(.dark) {
        p {
            color: var(--color-green-94);
        }
    }

    .justify {
        text-align: justify;
    }
</style>

<p class={justify ? "justify" : ""}>
    {@render children?.()}
</p>
