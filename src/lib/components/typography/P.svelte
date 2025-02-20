<script lang="ts">
    let { children } = $props();
</script>

<style>
    p {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2rem;
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
