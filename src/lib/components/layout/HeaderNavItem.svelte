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
        color: var(--color-prm-30);
    }
    /*
        .enabled:hover {
            color: var(--color-prm-20);
        }

        .enabled:active {
            color: var(--color-prm-28);
        }
    */
    .disabled {
        color: var(--color-sec-50);
    }

    :global(.dark) {
        .enabled {
            color: var(--color-prm-74);
        }
        /*
                .enabled:hover {
                    color: var(--color-prm-60);
                }

                .enabled:active {
                    color: var(--color-prm-52);
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
