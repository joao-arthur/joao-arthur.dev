<script lang="ts">
    import type { Language, Post } from "$lib/src/types";
    import { m } from "$lib/src/i18n/m";

    type Props = {
        readonly language: Language;
        readonly post: Post;
    };

    const { language, post }: Props = $props();
    const locale = m(language);
</script>

<style>
    div {
        padding-top: 30px;
        padding-bottom: 30px;
    }
</style>

<div>
    <p><b>{locale.post_created_at}:</b> {post.created_at}</p>
    <p><b>{locale.post_updated_at}:</b> {post.updated_at}</p>
    {#if post.license}
        <p><b>{locale.post_license}:</b> {post.license}</p>
    {/if}
    {#if post.repository}
        <p><b>{locale.post_repository}:</b> {post.repository}</p>
    {/if}
    {#if post.programming_languages}
        <p>
            <b>{locale.post_programming_languages}:</b> {post.programming_languages.join(", ")}
        </p>
    {/if}
    {#if post.technologies}
        <p><b>{locale.post_technologies}:</b> {post.technologies.join(", ")}</p>
    {/if}
</div>
