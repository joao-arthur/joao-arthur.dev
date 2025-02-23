<script lang="ts">
    import type { Language } from "$lib/src/types";
    import Card from "$lib/components/design/Card.svelte";
    import Content from "$lib/components/layout/Content.svelte";
    import H1 from "$lib/components/design/typography/H1.svelte";
    import P from "$lib/components/design/typography/P.svelte";
    import Badge from "$lib/components/design/Badge.svelte";
    import BadgeContainer from "$lib/components/design/BadgeContainer.svelte";
    import CardContent from "$lib/components/design/CardContent.svelte";
    import H2 from "$lib/components/design/typography/H2.svelte";
    import H3 from "$lib/components/design/typography/H3.svelte";
    import H4 from "$lib/components/design/typography/H4.svelte";
    import A from "$lib/components/design/typography/A.svelte";
    import { m } from "$lib/src/i18n/m";

    type Props = {
        readonly language: Language;
    }

    const {language}: Props = $props();
</script>

<Content>
    <img
        src="/images/myself.jpg"
        style="align-self: center; width: 300px; height: auto; border-radius: 30%"
        alt={m(language).about_myself_title}
    />
    <H1>{m(language).about_title}</H1>
    <P justify>{m(language).about_subtitle}</P>
    <A
        href="https://github.com/joao-arthur/aboutme.md/releases/latest/download/curriculum-joao-arthur-pt.pdf"
        target="_blank"
        decorated
    >
        <H4>{m("pt-BR").about_download_cv}</H4>
    </A>
    <Card>
        <CardContent>
            <H2>{m(language).about_programming_languages_title}</H2>
            <P>{m(language).about_programming_languages_subtitle}</P>
            <br />
            <H3>TypeScript</H3>
            <P>{m(language).about_typescript}</P>
            <br />
            <H3>Java</H3>
            <P>{m(language).about_java}</P>
            <br />
            <H3>Rust</H3>
            <P>{m(language).about_rust}</P>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
            <H2>Frontend</H2>
            <P>{m(language).about_frontend}</P>
            <BadgeContainer>
                <Badge color="blue">React</Badge>
                <Badge color="blue">Next.js</Badge>
                <Badge color="blue">Svelte</Badge>
            </BadgeContainer>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
            <H2>Backend</H2>
            <P>{m(language).about_backend}</P>
            <BadgeContainer>
                <Badge color="blue">Spring</Badge>
                <Badge color="blue">NestJS</Badge>
            </BadgeContainer>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
            <H2>Desktop</H2>
            <P>{m(language).about_desktop}</P>
            <BadgeContainer>
                <Badge color="blue">GTK</Badge>
                <Badge color="blue">Electron</Badge>
            </BadgeContainer>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
            <H2>Mobile</H2>
            <P>{m(language).about_mobile}</P>
            <BadgeContainer>
                <Badge color="blue">React Native</Badge>
                <Badge color="blue">Expo</Badge>
                <Badge color="blue">Flutter</Badge>
                <Badge color="blue">Android (Kotlin)</Badge>
            </BadgeContainer>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
            <H2>OS</H2>
            <P>{m(language).about_os}</P>
            <BadgeContainer>
                <Badge color="blue">Arch</Badge>
                <Badge color="blue">Debian</Badge>
            </BadgeContainer>
        </CardContent>
    </Card>
</Content>
