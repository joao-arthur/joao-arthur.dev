<script lang="ts">
    const { children } = $props();
</script>

<style>
    div {
        padding: 8px 16px;
    }
</style>

<div>
    {@render children?.()}
</div>
