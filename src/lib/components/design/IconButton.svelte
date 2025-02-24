<script lang="ts">
    const { children, onclick } = $props();
</script>

<style>
    button {
        border: none;
        padding: 0;
        width: 60px;
        height: 60px;
        border-radius: 25px;
        cursor: pointer;
        background-color: #d0d0d0;
        color: #2f2f2f;
    }

    :global(.dark) {
        button {
            background-color: #2f2f2f;
            color: #d0d0d0;
        }
    }
</style>

<button type="button" {onclick}>
    {@render children?.()}
</button>
