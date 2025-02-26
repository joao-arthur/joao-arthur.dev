<script lang="ts">
    const { children } = $props();
</script>

<style>
    thead {
        text-align: left;
    }
</style>

<thead>
    {@render children?.()}
</thead>
