<script lang="ts">
    let { children } = $props();
</script>

<style>
    p {
        padding: 0;
        margin: 0;
        color: black;
    }

    :global(.dark) {
        p {
            color: white;
        }
    }
</style>

<p>
    {@render children?.()}
</p>
