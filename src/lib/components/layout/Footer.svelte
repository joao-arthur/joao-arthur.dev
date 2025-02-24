<script lang="ts">
    import ComLinkedin from "../design/icons/ComLinkedin.svelte";
    import ComGithub from "../design/icons/ComGithub.svelte";
    import Mail from "../design/icons/Mail.svelte";
    import RSS from "../design/icons/RSS.svelte";
    import A from "../design/typography/A.svelte";
</script>

<style>
    footer {
        width: 100%;
        padding-bottom: 2rem;
        background-color: var(--color-prm-90);
    }

    :global(.dark) {
        footer {
            background-color: var(--color-prm-10);
        }
    }

    nav {
        display: flex;
        justify-content: center;
        column-gap: 25px;
        padding: 12px;
    }

    div {
        color: var(--color-prm-10);
    }

    div:hover {
        color: var(--color-prm-20);
    }

    div:active {
        color: var(--color-prm-30);
    }

    :global(.dark) {
        div {
            color: var(--color-prm-90);
        }

        div:hover {
            color: var(--color-prm-80);
        }

        div:active {
            color: var(--color-prm-70);
        }
    }
</style>

<footer>
    <nav>
        <A href="http://github.com/joao-arthur" target="_blank">
            <div>
                <ComGithub size={50}></ComGithub>
            </div>
        </A>
        <A href="https://www.linkedin.com/in/joao-lothamer" target="_blank">
            <div>
                <ComLinkedin size={50}></ComLinkedin>
            </div>
        </A>
        <A href="mailto://joao.lothamer@gmail.com" target="_blank">
            <div>
                <Mail size={50}></Mail>
            </div>
        </A>
        <A href="https://joao-arthur.dev/api/rss.xml" target="_blank">
            <div>
                <RSS size={50}></RSS>
            </div>
        </A>
    </nav>
</footer>
