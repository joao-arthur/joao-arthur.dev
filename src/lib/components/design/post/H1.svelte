<script lang="ts">
    const { children } = $props();
</script>

<style>
    h1 {
        font-weight: bold;
        font-size: 3rem;
        line-height: 4rem;
        color: black;
    }

    :global(.dark) {
        h1 {
            color: white;
        }
    }
</style>

<h1>
    {@render children?.()}
</h1>
