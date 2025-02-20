<script lang="ts">
    import Span from "../typography/Span.svelte";

    let { children } = $props();
</script>

<style>
    div {
        padding: 4px 10px;
        border-radius: 20px;
        overflow: hidden;
        background-color: blue;
    }

    :global(.dark) {
        div {
            background-color: darkblue;
        }
    }
</style>

<div>
    <Span>
        {@render children?.()}
    </Span>
</div>
