<script lang="ts">
    import Translate from "../design/icons/Translate.svelte";
    import IconButton from "../design/IconButton.svelte";

    import type { Language } from "$lib/src/types";
    import { page } from "$app/state";
    import { goto } from "$app/navigation";

    const pathname = new URL(page.url).pathname;
    const language = (function get_language(): Language {
        if (pathname.startsWith("/en-US")) {
            return "en-US";
        }
        if (pathname.startsWith("/pt-BR")) {
            return "pt-BR";
        }
        return "en-US";
    })();

    let component: HTMLDialogElement | null = null;
</script>

<style>
    div {
        display: flex;
        flex-direction: column;
        padding-top: 2rem;
        row-gap: 1rem;
    }

    dialog {
        padding: 30px;
        width: 50%;
        height: 50%;
        background-color: white;
        border: none;
        border-radius: 1rem;

        min-width: 300px;
        min-height: 500px;
    }

    button {
        font-size: 3rem;
        border: none;
        color: black;
        border-radius: 1rem;
    }

    :global(.dark) {
        dialog {
            background-color: black;
        }

        button {
            background-color: #ababab;
            color: white;
        }
    }
</style>

<IconButton
    onclick={() => {
        component.showModal();
    }}
>
    <Translate></Translate>
</IconButton>
<dialog bind:this={component}>
    <IconButton
        onclick={() => {
            component.close();
        }}
    >x</IconButton>
    <div>
        <button
            disabled={language === "en-US"}
            onclick={() => {
                goto(`/en-US/${page.url.pathname.slice(7)}`);
            }}
        >
            🇺🇸 English
        </button>
        <button
            disabled={language === "pt-BR"}
            onclick={() => {
                goto(`/pt-BR/${page.url.pathname.slice(7)}`);
            }}
        >
            🇧🇷 Português
        </button>
    </div>
</dialog>
