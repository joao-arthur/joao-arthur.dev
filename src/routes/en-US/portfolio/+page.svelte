<script lang="ts">
    import PostList from "$lib/components/features/PostList.svelte";

    const { data } = $props();
</script>

<svelte:head>
    <title>Portfolio | João Arthur</title>
</svelte:head>

<PostList language="en-US" posts={data.posts} feature="portfolio"></PostList>
