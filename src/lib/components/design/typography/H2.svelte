<script lang="ts">
    let { children, inherit = false } = $props();
</script>

<style>
    h2 {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 2.5rem;
        line-height: 3rem;
        color: black;
        overflow-wrap: break-word;
    }

    :global(.dark) {
        h2 {
            color: white;
        }

        .inherit {
            color: inherit;
        }
    }

    .inherit {
        color: inherit;
    }
</style>

<h2 class={inherit ? "inherit" : ""}>
    {@render children?.()}
</h2>
