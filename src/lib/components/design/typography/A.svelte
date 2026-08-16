<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        readonly children: Snippet;
        readonly href: string;
        readonly target?: "_blank";
        readonly decorated?: boolean;
    };

    const { children, href, target = undefined, decorated = false }: Props = $props();
</script>

<style>
    a {
        margin: 0;
        padding: 0;
        text-decoration: none;
        align-content: center;
        color: currentColor;
    }

    .decorated {
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-thickness: 5px;
    }
</style>

<a {href} {target} class={decorated ? "decorated" : ""}>
    {@render children?.()}
</a>
