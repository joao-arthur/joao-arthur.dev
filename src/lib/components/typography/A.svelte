<script lang="ts">
    let { children, href, target= undefined } = $props();
</script>

<style>
    a {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
</style>

<a {href}>
    {@render children?.()}
</a>
