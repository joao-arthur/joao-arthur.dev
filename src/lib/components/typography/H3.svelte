<script lang="ts">
    let { children } = $props();
</script>

<style>
    h3 {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 3rem;
        color: black;
    }

    :global(.dark) {
        h3 {
            color: white;
        }
    }
</style>

<h3>
    {@render children?.()}
</h3>
