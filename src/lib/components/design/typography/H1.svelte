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
        color: var(--color-prm-30);
    }

    :global(.dark) {
        h1 {
            color: var(--color-prm-70);
        }
    }
</style>

<h1>
    {@render children?.()}
</h1>
