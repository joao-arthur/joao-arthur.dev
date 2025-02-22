<script lang="ts">
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
</script>

<svelte:head>
    <title>About | João Arthur</title>
</svelte:head>

<Content>
    <img
        src="/images/myself.jpg"
        alt="João Arthur"
        style="align-self: center; width: 300px; height: auto; border-radius: 30%"
    />
    <H1>Hi, I'm João Arthur</H1>
    <P justify>
        I'm a 24 years old developer based in Brazil. I've been solving problems with code for over
        6 years using JavaScript, TypeScript and NodeJS. I apply <b>Clean Code</b>, <b>Clean
            Architecture</b> and <b>Unit Tests</b> when it is possible.
    </P>
    <A
        href="https://github.com/joao-arthur/aboutme.md/releases/latest/download/curriculum-joao-arthur-en.pdf"
        target="_blank"
        decorated
    >
        <H4>{m("en-US").download_cv}</H4>
    </A>
    <Card>
        <CardContent>
            <H2>Programming languages</H2>
            <P>I have knowledge in Object Orientation and Structured Programming</P>
            <br />
            <H3>TypeScript</H3>
            <P>Web, server, desktop and mobile applications, and all its ecossystems</P>
            <br />
            <H3>Java</H3>
            <P>Server environments, creating scalable backend applications</P>
            <br />
            <H3>Rust</H3>
            <P>
                Basic experience creating server and desktop applications, and web applications with
                Web Assembly
            </P>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
            <H2>Frontend</H2>
            <P>
                I create websites that run on every device, using JSX, flat and material design,
                data integration with https requests and websockets
            </P>
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
            <P>I create Rest APIs with database integration and queue systems</P>
            <BadgeContainer>
                <Badge color="blue">Spring</Badge>
                <Badge color="blue">NestJS</Badge>
            </BadgeContainer>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
            <H2>Desktop</H2>
            <P>I create desktop applications for Linux</P>
            <BadgeContainer>
                <Badge color="blue">GTK</Badge>
                <Badge color="blue">Electron</Badge>
            </BadgeContainer>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
            <H2>Mobile</H2>
            <P>I create native apps can can run on every device and Android native apps</P>
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
            <P>
                I know how to use, configure and manage Linux systems. I have solid knowledge in
                Arch and Debian based distributions
            </P>
            <BadgeContainer>
                <Badge color="blue">Arch</Badge>
                <Badge color="blue">Debian</Badge>
            </BadgeContainer>
        </CardContent>
    </Card>
</Content>
