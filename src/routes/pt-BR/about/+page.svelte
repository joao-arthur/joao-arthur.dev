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
    import H4 from "$lib/components/typography/H4.svelte";
    import A from "$lib/components/typography/A.svelte";
    import { m } from "$lib/i18n/m";
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
    <H1>Olá, eu sou João Arthur</H1>
    <P justify>
        Sou um desenvolvedor de 24 anos que mora no Brasil. Faz 6 anos que eu resolvo problemas com
        código em JavaScript, TypeScript and NodeJS. Eu aplico <b>Código Limpo</b>, <b>Arquitetura
            Limpa</b> e <b>Testes Unitários</b> quando é possível.
    </P>
    <A
        href="https://github.com/joao-arthur/aboutme.md/releases/latest/download/curriculum-joao-arthur-pt.pdf"
        target="_blank"
        decorated
    >
        <H4>{m("pt-BR").download_cv}</H4>
    </A>
    <Card>
        <CardContent>
            <H2>Linguagens de Programação</H2>
            <P>Possuo conhecimento em Orientação a Objetos e Programação Estruturada</P>
            <br />
            <H3>TypeScript</H3>
            <P>Aplicações web, servidores, desktop e mobile, e todo o seu ecossistema</P>
            <br />
            <H3>Java</H3>
            <P>Ambientes de servidor, criando aplicações backend escaláveis</P>
            <br />
            <H3>Rust</H3>
            <P>
                Experiência básica criando aplicações desktop e servidores, e aplicações web com Web
                Assembly
            </P>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
            <H2>Frontend</H2>
            <P>
                Crio sites que rodam em qualquer dispositivo, usando JSX, flat e material design,
                integração de dados com requisições http e websockets
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
            <P>Crio APIs Rest que integram banco de dados e sistemas de filas</P>
            <BadgeContainer>
                <Badge color="blue">Spring</Badge>
                <Badge color="blue">NestJS</Badge>
            </BadgeContainer>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
            <H2>Desktop</H2>
            <P>Crio aplicações desktop para Linux</P>
            <BadgeContainer>
                <Badge color="blue">GTK</Badge>
                <Badge color="blue">Electron</Badge>
            </BadgeContainer>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
            <H2>Mobile</H2>
            <P>
                Crio aplicativos nativos que rodam em qualquer dispositivo e aplicativos nativos
                Android
            </P>
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
                Sei como usar, configurar e gerenciar sistemas Linux. Possuo conhecimento sólido em
                distribuições baseadas em Arch e Debian
            </P>
            <BadgeContainer>
                <Badge color="blue">Arch</Badge>
                <Badge color="blue">Debian</Badge>
            </BadgeContainer>
        </CardContent>
    </Card>
</Content>
