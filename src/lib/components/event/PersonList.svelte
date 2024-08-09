<script lang="ts">
	import { manager } from '$lib/stores';
	import Error from '../shared/Error.svelte';
	import Person from './Person.svelte';

	let newPerson = '';
	let error: string | null;
	$: people = Array.from($manager.people);

	function addPerson() {
		error = manager.addPerson(newPerson);
		// Don't show error if it's because field is empty
		if (newPerson === '') {
			error = '';
		}
		if (!error) {
			newPerson = '';
		}
	}
	// FIXME : Input and button position gets broken on persion charachters
</script>

<div id="person-input">
	<input
		type="text"
		maxlength="35"
		placeholder="New person name"
		bind:value={newPerson}
		on:keydown={(e) => {
			if (e.key === 'Enter') {
				addPerson();
			}
		}}
	/><button on:click={addPerson}>Add</button>
</div>
<Error {error} />
<div>
	{#each people as person}
		<Person name={person} />
	{/each}
</div>

<style>
	div {
		margin: 10px;
	}
	#person-input {
		margin-bottom: 20px;
		border-radius: 20px;
		box-shadow: 0 0 10px var(--c2);
	}
	#person-input:focus-within {
		outline: var(--c2) solid 2px;
	}
	input {
		margin: 0;
		padding: 1em;
		width: 80%;
		border-radius: 20px 0 0 20px;
		height: 3em;
		outline: none;
		background-color: var(--c2);
		color: var(--c5);
	}
	input::placeholder {
		color: var(--c3);
	}
	button {
		margin: 0;
		width: 20%;
		border-radius: 0 20px 20px 0;
		border-left: 0;
		height: 3em;
	}
	button:focus {
		outline: none;
		border: none;
	}
</style>
