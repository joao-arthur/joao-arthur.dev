<script lang="ts">
    const { children, href, target = undefined, decorated = false } = $props();
</script>

<style>
    a {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    .decorated {
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-thickness: 5px;
    }
</style>

<a {href} {target} class={decorated ? "decorated" : ""}>
    {@render children?.()}
</a>
