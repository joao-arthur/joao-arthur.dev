<script lang="ts">
    const { children, disabled = false } = $props();
</script>

<style>
    h2 {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 2.5rem;
        line-height: 3rem;
        overflow-wrap: break-word;
        color: var(--color-prm-10);
    }

    .disabled {
        color: var(--color-sec-50);
    }

    :global(.dark) {
        h2 {
            color: var(--color-prm-90);
        }

        .disabled {
            color: var(--color-sec-70);
        }
    }
</style>

<h2 class={disabled ? "disabled" : ""}>
    {@render children?.()}
</h2>
