<script lang="ts">
    import PostList from "$lib/components/features/PostList.svelte";

    const { data } = $props();
</script>

<svelte:head>
    <title>Blog | João Arthur</title>
</svelte:head>

<PostList language="en-US" posts={data.posts} feature="blog"></PostList>
