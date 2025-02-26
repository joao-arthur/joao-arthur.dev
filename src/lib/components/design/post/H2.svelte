<script lang="ts">
    const { children } = $props();
</script>

<style>
    h2 {
        font-weight: bold;
        font-size: 2.5rem;
        line-height: 3rem;
        color: black;
    }

    :global(.dark) {
        h2 {
            color: white;
        }
    }
</style>

<h2>
    {@render children?.()}
</h2>
