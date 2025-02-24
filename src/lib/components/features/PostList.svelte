<script lang="ts">
    import type { Language, Post, TextFeature } from "$lib/src/types";
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
        readonly feature: TextFeature;
        readonly posts: readonly Post[];
    };

    const { posts, language, feature }: Props = $props();
</script>

<style>
    div {
        display: flex;
        align-items: center;
        border: none;
        padding-left: 20px;
        padding-right: 20px;
        height: 60px;
        border-radius: 25px;
        background-color: var(--color-prm-98);
        color: var(--color-prm-30);
    }

    :global(.dark) {
        div {
            background-color: var(--color-prm-3);
            color: var(--color-prm-70);
        }
    }
</style>

<Content>
    {#each posts as post}
        <Card>
            <A href={`/${language}/${feature}/${post.slug}`}>
                <CardContent>
                    <H1>{post.title}</H1>
                    <P>{post.description}</P>
                </CardContent>
                {#if post.img_url}
                    <img src={post.img_url} alt="" />
                {/if}
            </A>
            <CardContent>
                {#if post.programming_languages}
                    <BadgeContainer>
                        {#each post.programming_languages as language}
                            <Badge color="blue">{language}</Badge>
                        {/each}
                    </BadgeContainer>
                {/if}
                {#if post.technologies}
                    <BadgeContainer>
                        {#each post.technologies as technology}
                            <Badge color="yellow">{technology}</Badge>
                        {/each}
                    </BadgeContainer>
                {/if}
                {#if post.app_url || post.repository || post.license}
                    <BadgeContainer>
                        {#if post.app_url}
                            <A href={post.app_url} target="blank">
                                <IconButton>
                                    <Play></Play>
                                </IconButton>
                            </A>
                        {/if}
                        {#if post.repository}
                            <A href={post.repository} target="blank">
                                <IconButton>
                                    <ComGithub></ComGithub>
                                </IconButton>
                            </A>
                        {/if}
                        {#if post.license}
                            <div>
                                <Balance></Balance>
                                <P>{post.license}</P>
                            </div>
                        {/if}
                    </BadgeContainer>
                {/if}
            </CardContent>
        </Card>
    {/each}
</Content>
