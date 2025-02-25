<script lang="ts">
    const { children } = $props();
</script>

<style>
    h1 {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 3rem;
        line-height: 4rem;
        overflow-wrap: break-word;
        color: var(--color-prm-20);
    }

    :global(.dark) {
        h1 {
            color: var(--color-prm-76);
        }
    }
</style>

<h1>
    {@render children?.()}
</h1>
