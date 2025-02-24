<script lang="ts">
    import Span from "./typography/Span.svelte";

    const { children, color } = $props();

    function get_class() {
        if (color === "blue") {
            return "blue";
        }
        if (color === "yellow") {
            return "yellow";
        }
        return "";
    }
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

<div class={get_class()}>
    <Span>
        {@render children?.()}
    </Span>
</div>
