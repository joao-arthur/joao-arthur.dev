<script lang="ts">
    let { children } = $props();
</script>

<style>
    li {
        max-width: 800px;
        min-width: 0px;
        border-radius: 20px;
        overflow: hidden;
        background-color: #ebebeb;
    }

    :global(.dark) {
        li {
            background-color: #1c1c1c;
        }
    }
</style>

<li>
    {@render children?.()}
</li>
