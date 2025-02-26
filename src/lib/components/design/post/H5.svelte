<script lang="ts">
    const { children } = $props();
</script>

<style>
    h5 {
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
