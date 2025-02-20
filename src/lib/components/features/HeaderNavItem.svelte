<script lang="ts">
    import A from "../typography/A.svelte";

    let { children, href } = $props();
</script>

<style>
    div {
        display: flex;
        width: 250px;
        align-items: center;
        justify-content: center;
        color: black;
    }

    :global(.dark) {
        div {
            color: white;
        }
    }
</style>

<A {href}>
    <div>
        {@render children?.()}
    </div>
</A>
