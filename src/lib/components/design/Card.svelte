<script lang="ts">
    const { children, title } = $props();
</script>

<style>
    li {
        max-width: 800px;
        min-width: 0px;
        border-radius: 20px;
        overflow: hidden;
        list-style: none;
        background-color: var(--color-prm-86);
    }

    :global(.dark) {
        li {
            background-color: var(--color-prm-14);
        }
    }
</style>

<li {title}>
    {@render children?.()}
</li>
