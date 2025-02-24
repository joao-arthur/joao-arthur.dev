<script lang="ts">
    const { children } = $props();
</script>

<style>
    li {
        max-width: 800px;
        min-width: 0px;
        border-radius: 20px;
        overflow: hidden;
        list-style: none;
        background-color: var(--color-prm-90);
    }

    :global(.dark) {
        li {
            background-color: var(--color-prm-10);
        }
    }
</style>

<li>
    {@render children?.()}
</li>
