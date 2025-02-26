<script lang="ts">
    const { children } = $props();
</script>

<style>
    table {
        margin: 2rem 0;
        width: 100%;
        border-collapse: collapse;
    }
</style>

<table>
    {@render children?.()}
</table>
