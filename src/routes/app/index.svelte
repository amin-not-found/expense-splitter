<script context="module" lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	function gotoApp() {
		goto(`${base}/app/expense`);
	}
</script>

<svelte:head>
	<title>App</title>
</svelte:head>

<section>
	<h1>Welcome to expense splitter app</h1>
	<button on:click={gotoApp}>Go to test event</button>
</section>
