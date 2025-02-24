<script lang="ts">
    import A from "../design/typography/A.svelte";

    const { children, href, disabled } = $props();
</script>

<style>
    div {
        display: flex;
        width: 250px;
        align-items: center;
        justify-content: center;
    }

    .enabled {
        color: var(--color-prm-10);
    }
/*
    .enabled:hover {
        color: var(--color-prm-20);
    }

    .enabled:active {
        color: var(--color-prm-30);
    }
*/
    .disabled {
        color: var(--color-sec-50);
    }

    :global(.dark) {
        .enabled {
            color: var(--color-prm-90);
        }
/*
        .enabled:hover {
            color: var(--color-prm-80);
        }

        .enabled:active {
            color: var(--color-prm-70);
        }
        */

        .disabled {
            color: var(--color-sec-70);
        }
    }
</style>

{#if disabled}
    <div class="disabled">
        {@render children?.()}
    </div>
{:else}
    <A {href}>
        <div class="enabled">
            {@render children?.()}
        </div>
    </A>
{/if}
