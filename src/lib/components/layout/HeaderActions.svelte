<script lang="ts">
    import HeaderActionTheme from "./HeaderActionTheme.svelte";
    import HeaderActionTranslate from "./HeaderActionTranslate.svelte";
</script>

<style>
    .container {
        display: flex;
        justify-content: end;
    }

    .content {
        display: flex;
        column-gap: 8px;
    }
</style>

<div class="container">
    <div class="content">
        <HeaderActionTheme></HeaderActionTheme>
        <HeaderActionTranslate></HeaderActionTranslate>
    </div>
</div>
