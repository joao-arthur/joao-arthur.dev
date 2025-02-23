<script lang="ts">
    import Post from "$lib/components/features/post.svelte";

    const { data } = $props();
    const { Component, post } = data;
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

<Post language="pt-BR" {post} {Component}></Post>
