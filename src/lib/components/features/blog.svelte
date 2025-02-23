<script lang="ts">
    import type { Language, Post } from "$lib/src/types";
    import Card from "$lib/components/design/Card.svelte";
    import Content from "$lib/components/layout/Content.svelte";
    import H1 from "$lib/components/design/typography/H1.svelte";
    import P from "$lib/components/design/typography/P.svelte";
    import Badge from "$lib/components/design/Badge.svelte";
    import CardContent from "$lib/components/design/CardContent.svelte";
    import BadgeContainer from "$lib/components/design/BadgeContainer.svelte";
    import A from "$lib/components/design/typography/A.svelte";

    type Props = {
        readonly language: Language;
        readonly posts: readonly Post[];
    };

    let { posts, language }: Props = $props();
</script>

<Content>
    {#each posts as post}
        <Card>
            <CardContent>
                <A href="/{language}/blog/{post.slug}">
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
