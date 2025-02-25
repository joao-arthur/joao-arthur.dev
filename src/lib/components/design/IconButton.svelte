<script lang="ts">
    const { children, onclick, title } = $props();
</script>

<style>
    button {
        border: none;
        padding: 0;
        width: 60px;
        height: 60px;
        border-radius: 25px;
        cursor: pointer;
        background-color: var(--color-prm-78);
        color: var(--color-prm-50);
    }

    button:hover {
        background-color: var(--color-prm-70);
        color: var(--color-prm-42);
    }

    button:active {
        background-color: var(--color-prm-62);
        color: var(--color-prm-34);
    }

    :global(.dark) {
        button {
            background-color: var(--color-prm-26);
            color: var(--color-prm-62);
        }

        button:hover {
            background-color: var(--color-prm-34);
            color: var(--color-prm-70);
        }

        button:active {
            background-color: var(--color-prm-42);
            color: var(--color-prm-78);
        }
    }
</style>

<button type="button" {onclick} {title}>
    {@render children?.()}
</button>
