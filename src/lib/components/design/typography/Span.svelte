<script lang="ts">
    const { children } = $props();
</script>

<style>
    span {
        display: flex;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2rem;
        align-items: center;
        color: black;
    }

    :global(.dark) {
        span {
            color: white;
        }
    }
</style>

<span>
    {@render children?.()}
</span>
