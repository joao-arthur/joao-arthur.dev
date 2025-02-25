<script lang="ts">
    import Span from "./typography/Span.svelte";

    const { children, color } = $props();

    function get_class() {
        if (color === "red") {
            return "red";
        }
        if (color === "yellow") {
            return "yellow";
        }
        if (color === "green") {
            return "green";
        }
        if (color === "blue") {
            return "blue";
        }
        if (color === "pink") {
            return "pink";
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

    .red {
        background-color: #d73c3c;
    }

    .yellow {
        background-color: #d7d73c;
    }

    .green {
        background-color: #3cd7c5;
    }

    .blue {
        background-color: #3c7ad7;
    }

    .pink {
        background-color: #d73c8f;
    }

    :global(.dark) {
        .red {
            background-color: #421414;
        }

        .yellow {
            background-color: #424214;
        }

        .green {
            background-color: #14423d;
        }

        .blue {
            background-color: #1b1b61;
        }

        .pink {
            background-color: #42142d;
        }

    }
</style>

<div class={get_class()}>
    <Span>
        {@render children?.()}
    </Span>
</div>
