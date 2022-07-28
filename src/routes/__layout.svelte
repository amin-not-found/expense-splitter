<script lang="ts">
	import '../app.css';
	import { config } from '../lib/stores';
	import Footer from '../lib/components/Footer.svelte';
</script>

<svelte:head>
	{#if $config.darkTheme}
		<style>
			:root {
				--c1: #2b2c34; /* Background */
				--c2: #6246ea; /* Secondary */
				--c3: #d1d1e9; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #fffffe; /* Text */
			}
		</style>
	{:else}
		<style>
			:root {
				--c1: #fffffe; /* Background */
				--c2: #d1d1e9; /* Secondary */
				--c3: #6246ea; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #2b2c34; /* Text */
			}
		</style>
	{/if}
</svelte:head>

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		margin: 0 auto;
		margin-top: 2%;
		margin-bottom: 2%;
		padding: 1rem;
		width: 96%;
		max-width: 1024px;
		box-sizing: border-box;
		border-radius: 6px;
		background-color: var(--c1);
	}
</style>
