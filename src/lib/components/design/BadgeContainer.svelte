<script lang="ts">
    let { children } = $props();
</script>

<style>
    div {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        padding-top: 8px;
        padding-bottom: 8px;
        align-items: center;
    }
</style>

<div>
    {@render children?.()}
</div>
