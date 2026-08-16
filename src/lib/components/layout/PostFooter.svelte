<script lang="ts">
    import type { Language, Post } from "$lib/src/types";
    import { m } from "$lib/src/i18n/m";
    import P from "../design/typography/P.svelte";
    import Card from "../design/Card.svelte";

    type Props = {
        readonly language: Language;
        readonly post: Post;
    };

    const { language, post }: Props = $props();
    const locale = $derived(m(language));
</script>

<style>
    section {
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .container {
        padding: 10px;
    }
</style>

<section>
<Card>
<div class="container">
    <P><b>{locale.post_created_at}</b> {post.created_at}</P>
    <P><b>{locale.post_updated_at}</b> {post.updated_at}</P>
    {#if post.license}
        <P><b>{locale.post_license}</b> {post.license}</P>
    {/if}
    {#if post.repository}
        <P><b>{locale.post_repository}</b> {post.repository}</P>
    {/if}
    {#if post.programming_languages}
        <P>
            <b>{locale.post_programming_languages}:</b> {post.programming_languages.join(", ")}
        </P>
    {/if}
    {#if post.technologies}
        <P><b>{locale.post_technologies}</b> {post.technologies.join(", ")}</P>
    {/if}
</div>
</Card>
</section>
