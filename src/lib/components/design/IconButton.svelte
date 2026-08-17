<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
        readonly onclick?: () => void;
        readonly title?: string;
    };

    const { children, onclick, title }: Props = $props();
</script>

<style>
    button {
        border: none;
        padding: 0;
        width: 60px;
        height: 60px;
        border-radius: 25px;
        cursor: pointer;
        color: var(--content-light);
        background-color: var(--primary);
    }

    button:hover {
        background-color: color-mix(in srgb, var(--primary) 80%, white);
    }

    button:active {
        background-color: color-mix(in srgb, var(--primary) 65%, white);
    }

    :global(.dark) {
        button:hover {
            background-color: color-mix(in srgb, var(--primary) 85%, black);
        }

        button:active {
            background-color: color-mix(in srgb, var(--primary) 65%, black);
        }
    }
</style>

<button type="button" {onclick} {title}>
    {@render children?.()}
</button>
