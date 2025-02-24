<script lang="ts">
    const { children } = $props();
</script>

<style>
    h4 {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 2rem;
        color: var(--color-green-20);
    }

    :global(.dark) {
        h4 {
            color: var(--color-green-94);
        }
    }
</style>

<h4>
    {@render children?.()}
</h4>
