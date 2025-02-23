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

<IconButton
    onclick={() => {
        component.showModal();
    }}
>
    <Translate></Translate>
</IconButton>
<dialog bind:this={component}>
    <button
        onclick={() => {
            component.close();
        }}
    >
        Close
    </button>
    <div style="display: flex; flex-direction: column">
        <button
            disabled={language === "en-US"}
            onclick={() => {
                goto(`/en-US/${page.url.pathname.slice(7)}`);
            }}
        >
            English
        </button>
        <button
            disabled={language === "pt-BR"}
            onclick={() => {
                goto(`/pt-BR/${page.url.pathname.slice(7)}`);
            }}
        >
            Português
        </button>
    </div>
</dialog>
