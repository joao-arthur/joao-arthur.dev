<script lang="ts">
    import type { Component } from "svelte";
    import type { Post as PostType } from "$lib/src/types";
    import Post from "$lib/components/features/Post.svelte";

    type Props = {
        readonly data: {
            readonly post: PostType;
            readonly Component: Component;
        };
    };

    const { data }: Props = $props();
</script>

<svelte:head>
    <title>{data.post.title}</title>
    <meta data-key="description" name="description" content={data.post.description} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.post.title} />
    <meta property="og:description" content={data.post.description} />
    <meta name="twitter:title" content={data.post.title} />
    <meta name="twitter:description" content={data.post.description} />
</svelte:head>

<Post language="pt-BR" post={data.post} Component={data.Component}></Post>
