<script lang="ts">
    import Portfolio from "$lib/components/features/portfolio.svelte";

    const { data } = $props();
</script>

<svelte:head>
    <title>Portfolio | João Arthur</title>
</svelte:head>

<Portfolio language="en-US" posts={data.posts}></Portfolio>
