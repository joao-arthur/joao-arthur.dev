<script lang="ts">
    import type { Language, PortfolioPost } from "$lib/src/types";
    import Content from "$lib/components/layout/Content.svelte";
    import Card from "$lib/components/design/Card.svelte";
    import P from "$lib/components/design/typography/P.svelte";
    import H1 from "$lib/components/design/typography/H1.svelte";
    import Badge from "$lib/components/design/Badge.svelte";
    import CardContent from "$lib/components/design/CardContent.svelte";
    import BadgeContainer from "$lib/components/design/BadgeContainer.svelte";
    import A from "$lib/components/design/typography/A.svelte";
    import IconButton from "$lib/components/design/IconButton.svelte";
    import ComGithub from "$lib/components/design/icons/ComGithub.svelte";
    import Play from "$lib/components/design/icons/Play.svelte";
    import Balance from "$lib/components/design/icons/Balance.svelte";

    type Props = {
        readonly language: Language;
        readonly posts: readonly PortfolioPost[];
    }

    let { posts, language }: Props = $props();
</script>

<Content>
    {#each posts as post}
        <Card>
            <A href={`/${language}/portfolio/${post.slug}`}>
                <CardContent>
                    <H1>{post.title}</H1>
                    <P>{post.description}</P>
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
                <BadgeContainer>
                    <A href={post.app_url} target="blank">
                        <IconButton onclick={() => {}}>
                            <Play></Play>
                        </IconButton>
                    </A>
                    <A href={post.repository} target="blank">
                        <IconButton onclick={() => {}}>
                            <ComGithub></ComGithub>
                        </IconButton>
                    </A>
                    <Badge color="blue">
                        <Balance></Balance>
                        <P>{post.license}</P>
                    </Badge>
                </BadgeContainer>
            </CardContent>
        </Card>
    {/each}
</Content>
