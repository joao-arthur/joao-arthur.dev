<script lang="ts">
    let { children } = $props();
</script>

<style>
    section {
        display: flex;
        width: 100%;
        min-height: 100vh;
        justify-content: center;
    }

    div {
        display: flex;
        flex-direction: column;
        row-gap: 40px;
        max-width: 800px;
        min-width: 0px;
        flex-grow: 1 1 0;
        padding: 40px 20px;
    }
</style>

<section>
    <div>
        {@render children?.()}
    </div>
</section>
