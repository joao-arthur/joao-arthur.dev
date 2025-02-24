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
        background-color: var(--color-green-75);
        color: var(--color-green-45);
    }

    button:hover {
        background-color: var(--color-green-70);
        color: var(--color-green-40);
    }

    button:active {
        background-color: var(--color-green-65);
        color: var(--color-green-35);
    }

    :global(.dark) {
        button {
            background-color: var(--color-green-20);
            color: var(--color-green-70);
        }

        button:hover {
            background-color: var(--color-green-25);
            color: var(--color-green-75);
        }

        button:active {
            background-color: var(--color-green-30);
            color: var(--color-green-80);
        }
    }
</style>

<button type="button" {onclick}>
    {@render children?.()}
</button>
