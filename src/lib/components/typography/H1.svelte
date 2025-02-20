<script lang="ts">
    let { children } = $props();
</script>

<style>
    h1 {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 3rem;
        color: black;
        overflow-wrap: break-word;
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
