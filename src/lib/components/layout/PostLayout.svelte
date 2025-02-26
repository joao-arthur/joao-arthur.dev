<script module>
    import h1 from "../design/post/H1.svelte";
    import h2 from "../design/post/H2.svelte";
    import h3 from "../design/post/H3.svelte";
    import h4 from "../design/post/H4.svelte";
    import h5 from "../design/post/H5.svelte";
    import h6 from "../design/post/H6.svelte";
    import p from "../design/post/P.svelte";
    import span from "../design/post/Span.svelte";
    import li from "../design/post/Li.svelte";
    import table from "../design/post/Table.svelte";
    import thead from "../design/post/THead.svelte";

    export { h1, h2, h3, h4, h5, h6, li, p, span, table , thead};
</script>

<script lang="ts">
    const {children} = $props();
</script>

<style>
    :global(tbody tr) {
        line-height: 2rem;
        border-top: solid 1px white;
    }

    :global(pre) {
        overflow-y: auto;
        padding: 1rem;
        font-size: 0.8rem;
        margin: 1rem 0;
        overflow: auto;
        border-radius: 1em;
    }

    :global(code) {
        font-size: 1.2rem;
    }

    :global(pre code) {
        padding: 0;
    }

    :global(code, pre) {
        color: #f8f8f2;
        background: none;
        text-align: left;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        hyphens: none;
    }

    :global(:not(pre) > code, pre) {
        background: #282a36;
    }

    :global(.token.comment, .token.prolog, .token.doctype, .token.cdata) {
        color: #6272a4;
    }

    :global(.token.punctuation) {
        color: #f8f8f2;
    }

    :global(.namespace) {
        opacity: 0.7;
    }

    :global(.token.property, .token.tag, .token.constant, .token.symbol, .token.deleted) {
        color: #ff79c6;
    }

    :global(.token.boolean, .token.number) {
        color: #bd93f9;
    }

    :global(
        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.inserted
    ) {
        color: #50fa7b;
    }

    :global(
        .token.operator,
        .token.entity,
        .token.url,
        .language-css .token.string,
        .style .token.string,
        .token.variable
    ) {
        color: #f8f8f2;
    }

    :global(.token.atrule, .token.attr-value, .token.function, .token.class-name) {
        color: #f1fa8c;
    }

    :global(.token.keyword) {
        color: #8be9fd;
    }

    :global(.token.regex, .token.important) {
        color: #ffb86c;
    }

    :global(.token.important, .token.bold) {
        font-weight: bold;
    }

    :global(.token.italic) {
        font-style: italic;
    }

    :global(.token.entity) {
        cursor: help;
    }
</style>

{@render children?.()}
