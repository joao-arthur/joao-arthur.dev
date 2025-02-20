<script lang="ts">
    import A from "../typography/A.svelte";

    let { children, href, disabled } = $props();
</script>

<style>
    div {
        display: flex;
        width: 250px;
        align-items: center;
        justify-content: center;
    }

    .enabled {
        color: black;
    }

    .disabled {
        color: #8e8e8e;
    }

    :global(.dark) {
        .enabled {
            color: white;
        }

        .disabled {
            color: #646464;
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
