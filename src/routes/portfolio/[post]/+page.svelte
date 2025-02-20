<script lang="ts">
    import Content from "$lib/components/features/Content.svelte";
    import H1 from "$lib/components/typography/H1.svelte";

    let { data } = $props();
    const {
        title,
        description,
        created_at,
        updated_at,
        languages,
        technologies,
        img_url,
    } = data.meta;
    const { PostContent } = data;
</script>

<svelte:head>
    <title>{title}</title>
    <!--<meta data-key="description" name="description" content={excerpt} />-->
    <!--<meta name="twitter:title" content={title} />-->
    <!--<meta name="twitter:description" content={excerpt} />-->
    <!--<meta property="og:type" content="article" />-->
    <!--<meta property="og:title" content={title} />-->
    <!--<meta property="og:description" content={excerpt} />-->
</svelte:head>

<style>
    :global(main) {
        color: black;
    }

    :global(.dark main) {
        color: white;
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

<Content>
    <article>
        <H1>{title}</H1>
        <div style="padding-bottom: 10px">
            <p><b>Published</b> {created_at}</p>
            <p><b>Updated</b> {updated_at}</p>
        </div>
        <PostContent />
    </article>
</Content>
