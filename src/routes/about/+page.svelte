<script lang="ts">
    import Card from "$lib/components/design/Card.svelte";
    import Content from "$lib/components/features/Content.svelte";
    import H1 from "$lib/components/typography/H1.svelte";
    import P from "$lib/components/typography/P.svelte";
    import Badge from "$lib/components/design/Badge.svelte";
    import BadgeContainer from "$lib/components/design/BadgeContainer.svelte";
    import CardContent from "$lib/components/design/CardContent.svelte";
    import H2 from "$lib/components/typography/H2.svelte";
    import H3 from "$lib/components/typography/H3.svelte";
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
    <P>
        I'm a 24 years old developer based in Brazil. I love solving problems with code. I have 6
        years of experience in web development with JavaScript, TypeScript and NodeJS. I try to
        apply clean code, clean architecture and unit tests in my projects.
    </P>
    <a
        href="https://github.com/joao-arthur/aboutme.md/releases/latest/download/curriculum-joao-arthur-en.pdf"
        target="_blank"
        rel="noreferrer"
    >
        <h4>
            <b>Download my cv</b>
        </h4>
    </a>
    <Card>
        <CardContent>
            <H2>Programming languages</H2>
            <P>I have knowledge in Object Orientation and Structured Programming</P>
            <H3>TypeScript</H3>
            <P>Web, server, desktop and mobile applications, and all its ecossystems</P>
            <H3>Java</H3>
            <P>Server environments, creating scalable backend applications</P>
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
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
            </BadgeContainer>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
            <H2>Backend</H2>
            <P>I create services with database integration and queue systems</P>
            <BadgeContainer>
                <Badge>Spring</Badge>
                <Badge>NestJS</Badge>
            </BadgeContainer>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
            <H2>Desktop</H2>
            <P>I create desktop applications for Linux</P>
            <BadgeContainer>
                <Badge>GTK</Badge>
                <Badge>Electron</Badge>
            </BadgeContainer>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
            <H2>Mobile</H2>
            <P>I create native apps can can run on every device and Android native apps</P>
            <BadgeContainer>
                <Badge>React Native</Badge>
                <Badge>Expo</Badge>
                <Badge>Flutter</Badge>
                <Badge>Android (Kotlin)</Badge>
            </BadgeContainer>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
            <H2>OS</H2>
            <P>
                I know how to use, configure and manage Linux systems. based on I have solid
                knowledge in Arch and Debian based distributions.
            </P>
            <BadgeContainer>
                <Badge>Arch</Badge>
                <Badge>Debian</Badge>
            </BadgeContainer>
        </CardContent>
    </Card>
</Content>
