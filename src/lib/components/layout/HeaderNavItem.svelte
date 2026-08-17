<script lang="ts">
    import A from "../design/typography/A.svelte";

    const { children, href, selected } = $props();
</script>

<style>
    div {
        display: flex;
        width: 240px;
        align-items: center;
        justify-content: center;
    }

    .selected {
        color: var(--primary);
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-thickness: 5px;
    }
</style>

{#if selected}
    <div class="selected">
        {@render children?.()}
    </div>
{:else}
    <A {href}>
        <div>
            {@render children?.()}
        </div>
    </A>
{/if}
