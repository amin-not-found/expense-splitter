<script lang="ts">
	import { manager } from '../lib/stores';
		function gotoApp(){
			$manager.goToRoute("/app");
		}
	</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="SExpense splitter app" />
</svelte:head>

<section>
	<h1>Welcome to expense splitter</h1>
	<button on:click={gotoApp}>Use the app</button>
</section>

<style>
	section {
		background-color: var(--c1);
		padding: 2em;
		border-radius: 4px;
	}

	h1 {
		width: 100%;
	}
</style>
