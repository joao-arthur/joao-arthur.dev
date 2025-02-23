<script lang="ts">
    const { children } = $props();
</script>

<style>
    span {
        display: flex;
        padding: 0;
        margin: 0;
        color: black;
        align-items: center;
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
