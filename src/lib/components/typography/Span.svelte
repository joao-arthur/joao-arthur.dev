<script lang="ts">
    let { children } = $props();
</script>

<style>
    span {
        padding: 0;
        margin: 0;
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
