<script lang="ts">
    import type { Component } from "svelte";
    import type { Language, Post } from "$lib/src/types";
    import Content from "$lib/components/layout/Content.svelte";
    import { m } from "$lib/src/i18n/m";

    type Props = {
        readonly language: Language;
        readonly post: Post;
        readonly Component: Component;
    };

    let { language, post, Component }: Props = $props();
</script>

<style>
    :global(main) {
        color: black;
    }

    :global(.dark main) {
        color: white;
    }

    :global(h1) {
        font-weight: bold;
        font-size: 3rem;
        line-height: 4rem;
    }

    :global(h2) {
        font-weight: bold;
        font-size: 2.5rem;
        line-height: 3rem;
    }

    :global(h3) {
        font-weight: bold;
        font-size: 2rem;
        line-height: 2.5rem;
    }

    :global(h4) {
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 2rem;
    }

    :global(span, p, li) {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2rem;
    }

    :global(table) {
        width: 100%;
        border-collapse: collapse;
    }

    :global(thead) {
        text-align: left;
    }

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

<Content>
    <article>
        <Component></Component>
        <div style="padding: 30px 0px">
            <p><b>{m(language).post_created_at}:</b> {post.created_at}</p>
            <p><b>{m(language).post_updated_at}:</b> {post.updated_at}</p>
            {#if post.technologies}
                <p><b>{m(language).post_technologies}:</b> {post.technologies.join(", ")}</p>
            {/if}
        </div>
    </article>
</Content>
