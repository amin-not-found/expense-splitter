<script lang="ts">
	import { config } from '../stores';
	// TODO : make sure component sticks to the bottom
</script>

<footer>
	<button on:click={config.toggleTheme}>
		Set theme to {$config.darkTheme ? 'light ☀️' : 'dark 🌑'}</button
	>
	<button> Install expense splitter ⬇️</button>
	<p>Made by @amin-pro</p>
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
