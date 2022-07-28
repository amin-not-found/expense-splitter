<script lang="ts">
	import { manager } from '../stores';
	export let selected: Set<string>;

	$: people = Array.from($manager.people);

	function add(name: string) {
		selected.add(name);
		selected = selected;
	}
	function remove(name: string) {
		selected.delete(name);
		selected = selected;
	}
	function addAll() {
		selected = new Set($manager.people);
	}
	function removeAll() {
		selected = new Set();
	}
</script>

<label for="debtors">Debtors:</label>
<div id="debtors">
	{#each people as person}
		{#if selected.has(person)}
			<button class="person" on:click={() => remove(person)}>&#10003; {person}</button>
		{:else}
			<button class="person" on:click={() => add(person)}>&plus; {person}</button>
		{/if}
	{/each}
	<div id="controls">
		<button class="ctrl" on:click={addAll}>Select all</button>
		<button class="ctrl" on:click={removeAll}>Deselect all</button>
	</div>
</div>

<style>
	#debtors {
		border: 1px solid var(--c2);
		border-radius: 5px;
		padding: 1%;
		margin-top: 1.5%;
		margin-bottom: 4%;
	}
	button {
		margin: 0.13em;
		border-radius: 4px;
		padding: 0.5em;
	}
	.person {
		background-color: var(--c2);
		color: var(--c5);
	}
	#controls {
		margin-top: 2%;
	}
</style>
