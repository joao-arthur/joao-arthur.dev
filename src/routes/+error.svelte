<script lang="ts">
    import { page } from "$app/state";
    import Content from "$lib/components/features/Content.svelte";
    import H1 from "$lib/components/typography/H1.svelte";
    import P from "$lib/components/typography/P.svelte";
</script>

<style>
    div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>

<Content>
    <div>
        <H1>{page.status}</H1>
        {#if (page.status === 404)}
            <P>There is nothing to see here</P>
        {/if}
    </div>
</Content>
