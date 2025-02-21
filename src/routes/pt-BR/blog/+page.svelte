<script lang="ts">
    import Card from "$lib/components/design/Card.svelte";
    import Content from "$lib/components/features/Content.svelte";
    import H1 from "$lib/components/typography/H1.svelte";
    import P from "$lib/components/typography/P.svelte";
    import Badge from "$lib/components/design/Badge.svelte";
    import CardContent from "$lib/components/design/CardContent.svelte";
    import BadgeContainer from "$lib/components/design/BadgeContainer.svelte";
    import A from "$lib/components/typography/A.svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>Blog | João Arthur</title>
</svelte:head>

<Content>
    {#each data.posts as post}
        <Card>
            <CardContent>
                <A href="/pt-BR/blog/{post.slug}">
                    <H1>{post.title}</H1>
                    <P>{post.description}</P>
                    <P>{new Date(post.created_at).toLocaleDateString()}</P>
                </A>
                <BadgeContainer>
                    {#each post.technologies as technology}
                        <Badge color="blue">{technology}</Badge>
                    {/each}
                </BadgeContainer>
            </CardContent>
        </Card>
    {/each}
</Content>
