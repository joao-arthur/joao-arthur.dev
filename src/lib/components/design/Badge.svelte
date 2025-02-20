<script lang="ts">
    import Span from "../typography/Span.svelte";

    let { children, color } = $props();
</script>

<style>
    div {
        padding: 4px 10px;
        border-radius: 20px;
        overflow: hidden;
    }

    .blue {
        background-color: #a3a3ff;
    }

    .yellow {
        background-color: #d7d73c;
    }

    :global(.dark) {
        .blue {
            background-color: #2a2a84;
        }

        .yellow {
            background-color: #484818;
        }
    }
</style>

<div class={color}>
    <Span>
        {@render children?.()}
    </Span>
</div>
