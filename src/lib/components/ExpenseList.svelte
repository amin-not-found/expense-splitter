<script lang="ts">
	import { slide, fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	import ExpenseItem from './ExpenseItem.svelte';
	import { manager } from '../stores';

	let selected = $manager.expenses.map(() => false);
	$: anySelected = selected.some((v) => v);
	// TODO : only one debtor is possible
	function bulk_delete() {
		let expenses = $manager.expenses
			.filter((_, index) => selected[index])
			.map((expense) => expense.name);
		manager.deleteExpenses(...expenses);
		selected = $manager.expenses.map(() => false);
	}
	function select_all() {
		selected = $manager.expenses.map(() => true);
	}
	function deselect_all() {
		selected = $manager.expenses.map(() => false);
	}
</script>

<!-- TODO : style this button and remember to make it more obivious that user should click on
add new expense (make it discoverable ux wise)
-->
<div id="add-wrapper">
	<button id="add" on:click={manager.createExpense}>Add new expense</button>
</div>

<table>
	<thead>
		<tr>
			<th />
			<th> Name </th>
			<th> Payer </th>
			<th> Amount</th>
			<th> Debtor </th>
		</tr>
	</thead>
	<tbody>
		{#each $manager.expenses as expense, index}
			<ExpenseItem {expense} bind:isSelected={selected[index]} />
		{/each}
	</tbody>
</table>

{#if anySelected}
	<div transition:slide={{ easing: expoOut }}>
		<button class="control delete" on:click={bulk_delete}>Delete selected expenses</button>
		<button class="control" in:fly={{ duration: 500 }} on:click={deselect_all}
			>Deselect expenses</button
		>
	</div>
{/if}
<button class="control" in:fly={{ duration: 500 }} on:click={select_all}>Select all expenses</button
>

<style>
	.control {
		margin-left: 10%;
		width: 80%;
		border-radius: 20px;
		height: 3em;
		box-shadow: 0 0 10px #ccc;
	}
	table {
		margin: 5%;
		margin-top: 24px;
		margin-bottom: 32px;
		width: 90%;
		border-spacing: 0;
		border: 1px solid var(--c3);
		border-radius: 10px;
		box-shadow: 4px 4px 10px var(--c2);
		overflow: hidden;
	}
	tr {
		border-bottom: 1px solid var(--c3);
	}
	th {
		font-weight: lighter;
		padding: 0.4em;
	}
	.delete {
		background-color: var(--c4);
	}
	#add-wrapper {
		display: flex;
		justify-content: center;
	}
	#add {
		padding: 0.9em;
		padding-left: 1.5em;
		padding-right: 1.5em;
		border-radius: 12px;
		font-size: larger;
	}
</style>
