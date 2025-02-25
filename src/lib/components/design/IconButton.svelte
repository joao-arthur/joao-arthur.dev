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
        background-color: var(--color-prm-56);
        color: var(--color-prm-40);
    }

    button:hover {
        background-color: var(--color-prm-52);
        color: var(--color-prm-36);
    }

    button:active {
        background-color: var(--color-prm-48);
        color: var(--color-prm-32);
    }

    :global(.dark) {
        button {
            background-color: var(--color-prm-20);
            color: var(--color-prm-52);
        }

        button:hover {
            background-color: var(--color-prm-24);
            color: var(--color-prm-56);
        }

        button:active {
            background-color: var(--color-prm-28);
            color: var(--color-prm-60);
        }
    }
</style>

<button type="button" {onclick}>
    {@render children?.()}
</button>
