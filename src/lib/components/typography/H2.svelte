<script lang="ts">
    let { children } = $props();
</script>

<style>
    h2 {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 3rem;
        color: black;
        overflow-wrap: break-word;
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
