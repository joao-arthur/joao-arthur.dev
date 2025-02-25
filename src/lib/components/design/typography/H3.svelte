<script lang="ts">
    const { children, disabled } = $props();
</script>

<style>
    h3 {
        padding: 0;
        margin: 0;
        font-weight: bold;
        font-size: 2rem;
        line-height: 2.5rem;
        color: var(--color-prm-30);
    }

    .disabled {
        color: var(--color-sec-50);
    }

    :global(.dark) {
        h3 {
            color: var(--color-prm-70);
        }

        .disabled {
            color: var(--color-sec-70);
        }
    }
</style>

<h3 class={disabled ? "disabled" : ""}>
    {@render children?.()}
</h3>
