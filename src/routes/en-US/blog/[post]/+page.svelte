<script lang="ts">
    import PostBlog from "$lib/components/features/post_blog.svelte";

    let { data } = $props();
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

<PostBlog language="en-US" {post} {Component}></PostBlog>
