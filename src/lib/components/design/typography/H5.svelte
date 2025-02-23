<script lang="ts">
    const { children } = $props();
</script>

<style>
    h5 {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 1rem;
        line-height: 1.5rem;
        color: black;
    }

    :global(.dark) {
        h5 {
            color: white;
        }
    }
</style>

<h5>
    {@render children?.()}
</h5>
