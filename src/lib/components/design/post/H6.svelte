<script lang="ts">
    const { children } = $props();
</script>

<style>
    h6 {
        color: black;
    }

    :global(.dark) {
        h6 {
            color: white;
        }
    }
</style>

<h6>
    {@render children?.()}
</h6>
