<script lang="ts">
    const { children } = $props();
</script>

<style>
    h4 {
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 2rem;
        color: black;
    }

    :global(.dark) {
        h4 {
            color: white;
        }
    }
</style>

<h4>
    {@render children?.()}
</h4>
