<script lang="ts">
	import { manager } from '../stores';
	export let selected: string;
	$: people = Array.from($manager.people);
</script>

<label for="creditor">Creditor:</label>
<select id="creditor" bind:value={selected}>
	<option value={null} disabled>Select a person</option>
	{#each people as person}
		<option value={person}>{person}</option>
	{/each}
</select>
