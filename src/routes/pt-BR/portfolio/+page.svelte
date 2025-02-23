<script lang="ts">
    import Portfolio from "$lib/components/features/portfolio.svelte";

    const { data } = $props();
</script>

<svelte:head>
    <title>Portifólio | João Arthur</title>
</svelte:head>

<Portfolio language="pt-BR" posts={data.posts}></Portfolio>
