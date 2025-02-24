<script lang="ts">
    import HeaderActionTheme from "./HeaderActionTheme.svelte";
    import HeaderActionTranslate from "./HeaderActionTranslate.svelte";
</script>

<style>
    .container {
        display: flex;
        justify-content: end;
        align-items: center;
    }

    .content {
        justify-items: center;
        display: flex;
        gap: 1rem;
    }
</style>

<div class="container">
    <div class="content">
        <HeaderActionTheme></HeaderActionTheme>
        <HeaderActionTranslate></HeaderActionTranslate>
    </div>
</div>
