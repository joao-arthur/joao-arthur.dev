<script lang="ts">
    import Translate from "../design/icons/Translate.svelte";
    import IconButton from "../design/IconButton.svelte";

    import type { Language } from "$lib/src/types";
    import { page } from "$app/state";
    import { goto } from "$app/navigation";
    import H2 from "../design/typography/H2.svelte";
    import H3 from "../design/typography/H3.svelte";
    import { m } from "$lib/src/i18n/m";

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

    const locale = m(language);
</script>

<style>
    .header {
        background-color: var(--color-prm-86);
        display: flex;
        align-items: center;
        padding: 30px;
        column-gap: 1rem;
    }

    .footer {
        background-color: var(--color-prm-86);
        display: flex;
        padding: 30px;
        align-items: center;
        justify-content: end;
    }

    .container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .content {
        display: flex;
        flex-direction: column;
        padding: 30px;
        row-gap: 1rem;
    }

    dialog {
        padding: 0;
        border: none;
        border-radius: 1rem;
        background-color: var(--color-prm-94);
        min-width: 410px;
    }

    @media (max-width: 450px) {
        dialog {
            width: 100vw;
            height: 100vh;
            min-width: unset;
        }

        .content {
            flex-grow: 1;
        }
    }

    dialog::backdrop {
        background-color: var(--color-prm-22);
        opacity: 0.5;
    }

    button {
        cursor: pointer;
        border: none;
        padding-top: 2rem;
        padding-bottom: 2rem;
        border-radius: 1rem;
        background-color: var(--color-prm-78);
    }

    button:hover {
        background-color: var(--color-prm-70);
    }

    button:active {
        background-color: var(--color-prm-62);
    }

    button:disabled {
        cursor: unset;
        background-color: var(--color-sec-90);
    }

    .footer button {
        background-color: var(--color-prm-78);
    }

    .footer button:hover {
        background-color: var(--color-prm-70);
    }

    .footer button:active {
        background-color: var(--color-prm-62);
    }

    :global(.dark) {
        dialog {
            background-color: var(--color-prm-6);
        }

        .header, .footer {
            background-color: var(--color-prm-14);
        }

        dialog::backdrop {
            background-color: var(--color-prm-74);
            opacity: 0.5;
        }

        button {
            background-color: var(--color-prm-22);
            color: white;
        }

        button:hover {
            background-color: var(--color-prm-30);
        }

        button:active {
            background-color: var(--color-prm-38);
        }

        button:disabled {
            background-color: var(--color-sec-10);
        }

        .footer button {
            background-color: var(--color-prm-22);
        }

        .footer button:hover {
            background-color: var(--color-prm-30);
        }

        .footer button:active {
            background-color: var(--color-prm-38);
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
    <div class="container">
        <div class="header">
            <H2>{locale.dialog_title}</H2>
        </div>
        <div class="content">
            <button
                disabled={language === "en-US"}
                onclick={() => {
                    goto(`/en-US/${page.url.pathname.slice(7)}`);
                }}
            >
                <H3 disabled={language === "en-US"}>🇺🇸 English</H3>
            </button>
            <button
                disabled={language === "pt-BR"}
                onclick={() => {
                    goto(`/pt-BR/${page.url.pathname.slice(7)}`);
                }}
            >
                <H3 disabled={language === "pt-BR"}>🇧🇷 Português</H3>
            </button>
        </div>
        <div class="footer">
            <button
                onclick={() => {
                    component?.close();
                }}
            >
                <H3>{locale.dialog_close}</H3>
            </button>
        </div>
    </div>
</dialog>
