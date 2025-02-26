<script lang="ts">
    import type { Component } from "svelte";
    import type { Language, Post } from "$lib/src/types";
    import Content from "$lib/components/layout/Content.svelte";
    import A from "$lib/components/design/typography/A.svelte";
    import { m } from "$lib/src/i18n/m";
    import PostFooter from "../layout/PostFooter.svelte";

    type Props = {
        readonly language: Language;
        readonly post: Post;
        readonly Component: Component;
    };

    const { language, post, Component }: Props = $props();
    const locale = m(language);
</script>

<Content>
    <article>
        <img style="border-radius: 20px" src={post.img_url} alt="" />
        {#if post.app_url}
            <A href={post.app_url}><h2>{locale.post_try}</h2></A>
        {/if}
        <Component></Component>
        <PostFooter {language} {post}></PostFooter>
    </article>
</Content>
