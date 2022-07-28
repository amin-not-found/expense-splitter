<script lang="ts">
	import { slide } from 'svelte/transition';
	export let error: string | null;
</script>

{#if error}
	<p transition:slide={{ duration: 320 }}>{error}</p>
{/if}

<style>
	p {
		padding: 10px;
		background-color: var(--c4);
		color: var(--c1);
		border-radius: 12px;
	}
</style>
