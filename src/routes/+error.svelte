<script lang="ts">
    import { page } from "$app/stores";
    import A from "$lib/components/typography/A.svelte";
</script>

<h2>{$page.status}</h2>
<p>{$page.error.message}</p>

<p><strong>Sorry!</strong> Maybe try one of these links?</p>
<ul>
    <li><A href="/">Home</A></li>
</ul>
