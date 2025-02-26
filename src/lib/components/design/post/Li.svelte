<script lang="ts">
    const { children } = $props();
</script>

<style>
    li {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2rem;
        color: black;
    }

    :global(.dark) {
        li {
            color: white;
        }
    }
</style>

<li>
    {@render children?.()}
</li>
