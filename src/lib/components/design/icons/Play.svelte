<script lang="ts">
    type Props = {
        readonly size?: number;
    };

    const { size = 24 }: Props = $props();
</script>

<svg width={size} height={size} viewBox="0 0 24 24">
    <path
        fill="currentColor"
        d="M8 19V5l11 7z"
    />
</svg>
