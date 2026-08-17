<script lang="ts">
    type Props = {
        readonly children?: any;
    };

    const { children }: Props = $props();
</script>

<style>
    section {
        display: flex;
        width: 100%;
        min-height: 100vh;
        justify-content: center;
        color: var(--content-light);
    }

    div {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
        max-width: 800px;
        min-width: 0px;
        flex-grow: 1 1 0;
        padding: 40px 20px;
    }

    :global(.dark) {
        section {
            color: var(--content-dark);
        }
    }
</style>

<section>
    <div>
        {@render children?.()}
    </div>
</section>
