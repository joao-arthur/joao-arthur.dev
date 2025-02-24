<script lang="ts">
    const { children, onclick } = $props();
</script>

<style>
    button {
        border: none;
        padding: 0;
        width: 60px;
        height: 60px;
        border-radius: 25px;
        cursor: pointer;
        background-color: var(--color-prm-98);
        color: var(--color-prm-40);
    }

    button:hover {
        background-color: var(--color-prm-80);
    }

    button:active {
        background-color: var(--color-prm-70);
    }

    :global(.dark) {
        button {
            background-color: var(--color-prm-3);
            color: var(--color-prm-70);
        }

        button:hover {
            background-color: var(--color-prm-15);
        }

        button:active {
            background-color: var(--color-prm-20);
        }
    }
</style>

<button type="button" {onclick}>
    {@render children?.()}
</button>
