<script lang="ts">
	import { manager, config } from '$lib/stores';
	function install() {
		// @ts-expect-error: ciuld't find definition for beforeInstallPromptEvent
		// and normal event doesn't have prompt function
		$manager.installEvent?.prompt();
		$manager.setInstallEvent(null);
	}
	// TODO : maybe give user direction on how to add the app to home screen when intsall not available
</script>

<footer>
	<button on:click={config.toggleTheme}>
		Set theme to {$config.darkTheme ? 'light ☀️' : 'dark 🌑'}</button
	>
	{#if $manager.installEvent != null}
		<button on:click={install}> Install expense splitter ⬇️</button>
	{/if}
	<p>Made by <a href="https://github.com/amin-not-found">@amin-not-found</a></p>
</footer>

<style>
	footer {
		padding: 20px;
		background-color: var(--c1);
	}
	button {
		padding: 0.7em;
		color: var(--c3);
		background-color: var(--c2);
		border-radius: 2em;
	}
</style>
