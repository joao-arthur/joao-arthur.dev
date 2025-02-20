<script lang="ts">
    let { children, onclick } = $props();
</script>

<style>
    button {
        border: none;
        padding: 0;
        width: 50px;        
        height: 50px;
        border-radius: 20px;   
        cursor: pointer;
        background-color: #d5e3ff;
        color: #001b3c;

    }

    :global(.dark) {
        button {
            background-color: #001b3c;
            color: #d5e3ff;
        }
    }
</style>

<button type="button" {onclick}>
    {@render children?.()}
</button>
