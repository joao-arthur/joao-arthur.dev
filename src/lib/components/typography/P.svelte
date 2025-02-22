<script lang="ts">
    let { children, justify = false } = $props();
</script>

<style>
    p {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2rem;
        color: black;
    }

    :global(.dark) {
        p {
            color: white;
        }
    }

    .justify {
        text-align: justify;
    }
</style>

<p class={justify ? "justify" : ""}>
    {@render children?.()}
</p>
