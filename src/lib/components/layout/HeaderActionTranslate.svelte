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

    const locale = $derived(m(language));
</script>

<style>
    dialog {
        padding: 0;
        border: none;
        border-radius: 1rem;
        min-width: 410px;
        background-color: var(--background-light);
        color: var(--content-light);
    }

    dialog::backdrop {
        background-color: var(--surface-dark);
        opacity: 0.5;
    }

    :global(.dark) {
        dialog {
            background-color: var(--background-dark);
            color: var(--content-dark);
        }

        dialog::backdrop {
            background-color: var(--surface-light);
            opacity: 0.3;
        }
    }

    .container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .header {
        background-color: var(--surface-light);
        display: flex;
        align-items: center;
        padding: 30px;
        column-gap: 1rem;
    }

    .footer {
        background-color: var(--surface-light);
        display: flex;
        padding: 30px;
        align-items: center;
        justify-content: end;
    }

    :global(.dark) {
        .header, .footer {
            background-color: var(--surface-dark);
        }
    }

    .option {
        cursor: pointer;
        border: none;
        padding-top: 2rem;
        padding-bottom: 2rem;
        border-radius: 1rem;
        background-color: transparent;
        color: var(--content-light);
    }

    :global(.dark) {
        .option {
            color: var(--content-dark);
        }
    }

    .option:hover {
        background-color: color-mix(in srgb, var(--primary) 30%, white);
    }

    .option:active {
        background-color: color-mix(in srgb, var(--primary) 45%, white);
    }

    :global(.dark) {
        .option:hover {
            background-color: color-mix(in srgb, var(--primary) 15%, black);
        }

        .option:active {
            background-color: color-mix(in srgb, var(--primary) 20%, black);
        }
    }

    .option-selected {
        cursor: unset;
        border: none;
        padding-top: 2rem;
        padding-bottom: 2rem;
        background-color: transparent;
        color: var(--primary);
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-thickness: 5px;
    }

    .content {
        display: flex;
        flex-direction: column;
        padding: 30px;
        row-gap: 1rem;
    }

    .footer button {
        cursor: pointer;
        border: none;
        padding: 2rem 1rem;
        border-radius: 1rem;
        background-color: var(--primary);
    }

    .footer button:hover {
        background-color: color-mix(in srgb, var(--primary) 80%, white);
    }

    .footer button:active {
        background-color: color-mix(in srgb, var(--primary) 65%, white);
    }

    :global(.dark) {
        .footer button:hover {
            background-color: color-mix(in srgb, var(--primary) 85%, black);
        }

        .footer button:active {
            background-color: color-mix(in srgb, var(--primary) 65%, black);
        }
    }
</style>

<IconButton
    title={locale.language}
    onclick={() => {
        component?.showModal();
    }}
>
    <Translate></Translate>
</IconButton>
<dialog bind:this={component}>
    <div class="container">
        <div class="header">
            <H2>{locale.language}</H2>
        </div>
        <div class="content">
            <button
                class={language === "en-US" ? "option-selected" : "option"}
                disabled={language === "en-US"}
                onclick={() => {
                    goto(`/en-US/${page.url.pathname.slice(7)}`);
                }}
            >
                <H3>🇺🇸 English</H3>
            </button>
            <button
                class={language === "pt-BR" ? "option-selected" : "option"}
                disabled={language === "pt-BR"}
                onclick={() => {
                    goto(`/pt-BR/${page.url.pathname.slice(7)}`);
                }}
            >
                <H3>🇧🇷 Português</H3>
            </button>
        </div>
        <div class="footer">
            <button
                onclick={() => {
                    component?.close();
                }}
            >
                <H3>{locale.close}</H3>
            </button>
        </div>
    </div>
</dialog>
