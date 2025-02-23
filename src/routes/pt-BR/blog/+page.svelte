<script lang="ts">
    import Blog from "$lib/components/features/blog.svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>Blog | João Arthur</title>
</svelte:head>

<Blog language="pt-BR" posts={data.posts}></Blog>
