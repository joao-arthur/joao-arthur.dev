<script lang="ts">
    const { children } = $props();
</script>

<style>
    p {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2rem;
        color: black;
        text-align: justify;
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
