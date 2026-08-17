<script lang="ts">
    import type { Language, Post } from "$lib/src/types";
    import { m } from "$lib/src/i18n/m";
    import Card from "../design/Card.svelte";
    import P from "../design/typography/P.svelte";
    import H4 from "../design/typography/H4.svelte";

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
        display: flex;
        padding: 10px;
        flex-direction: column;
    }

    .content {
        display: flex;
        column-gap: 1.5rem;
    }
</style>

<section>
    <Card>
        <div class="container">
            <div class="content">
                <H4>{locale.post_created_at}</H4>
                <P>{post.created_at}</P>
            </div>
            <div class="content">
                <H4>{locale.post_updated_at}</H4>
                <P>{post.updated_at}</P>
            </div>
            {#if post.license}
                <div class="content">
                    <H4>{locale.post_license}</H4>
                    <P>{post.license}</P>
                </div>
            {/if}
            {#if post.repository}
                <div class="content">
                    <H4>{locale.post_repository}</H4>
                    <P>{post.repository}</P>
                </div>
            {/if}
            {#if post.programming_languages}
                <div class="content">
                    <H4>{locale.post_programming_languages}</H4>
                    <P>{post.programming_languages.join(", ")}</P>
                </div>
            {/if}
            {#if post.technologies}
                <div class="content">
                    <H4>{locale.post_technologies}</H4>
                    <P>{post.technologies.join(", ")}</P>
                </div>
            {/if}
        </div>
    </Card>
</section>
