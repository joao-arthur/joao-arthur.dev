<script lang="ts">
    const { children } = $props();
</script>

<style>
    h3 {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 2rem;
        line-height: 2.5rem;
        color: var(--color-prm-10);
    }

    :global(.dark) {
        h3 {
            color: var(--color-prm-90);
        }
    }
</style>

<h3>
    {@render children?.()}
</h3>
