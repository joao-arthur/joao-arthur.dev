<script lang="ts">
    import Content from "$lib/components/features/Content.svelte";
    import Card from "$lib/components/design/Card.svelte";
    import P from "$lib/components/typography/P.svelte";
    import H1 from "$lib/components/typography/H1.svelte";
    import Badge from "$lib/components/design/Badge.svelte";
    import CardContent from "$lib/components/design/CardContent.svelte";
    import BadgeContainer from "$lib/components/design/BadgeContainer.svelte";
    import A from "$lib/components/typography/A.svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>Portfolio | João Arthur</title>
</svelte:head>

<Content>
    {#each data.posts as post}
        <Card>
            <A href="/portfolio/{post.slug}">
                <CardContent>
                    <H1>{post.title}</H1>
                    <P>{post.description}</P>
                    <P>{new Date(post.created_at).toLocaleDateString()}</P>
                </CardContent>
                <img src={post.img_url} alt="" />
            </A>
            <CardContent>
                <BadgeContainer>
                    {#each post.languages as language}
                        <Badge color="blue">{language}</Badge>
                    {/each}
                </BadgeContainer>
                <BadgeContainer>
                    {#each post.technologies as technology}
                        <Badge color="yellow">{technology}</Badge>
                    {/each}
                </BadgeContainer>
                <P>git link</P>
                <P>project</P>
            </CardContent>
        </Card>
    {/each}
</Content>
