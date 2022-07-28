<script lang="ts">
	import { scale } from 'svelte/transition';
	import { manager } from '../stores';
	export let name: string;

	// TODO : transition out acts weird
</script>

<div transition:scale>
	<span>{name}</span>
	<button
		on:click={() => {
			manager.removePerson(name);
		}}>&#x2715</button
	>
</div>

<style>
	div {
		display: inline-block;
		padding-left: 10px;
		margin: 5px;
		border-radius: 20px;
		height: 2.5em;
		background-color: var(--c2);
		box-shadow: 0 1px 5px var(--c2);
		user-select: none;
	}
	button {
		height: 2.5em;
		width: 2.5em;
		border-radius: 20px;
	}
	span {
		margin: 5px;
	}
</style>
