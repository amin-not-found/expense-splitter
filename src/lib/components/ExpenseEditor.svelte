<script lang="ts">
	import DebtorsSelect from './DebtorsSelect.svelte';
	import CreditorSelect from './CreditorSelect.svelte';
	import { manager } from '../stores';
	import { Mode } from '../state';
	import Error from './Error.svelte';

	export let dismiss: typeof $manager.dismissModal;
	let expense = $manager.currentExpense!;
	let error = '';
	function submitExpense() {
		error = manager.submitExpense() ?? '';
	}
	function _delete() {
		$manager.deleteExpenses(expense.name);
	}
	// TODO : somehow select all triggers submit expense
	// TODO : style submit button
	// TODO : maybe add comma seprator to field for expense amount
</script>

<form on:submit|preventDefault={submitExpense}>
	<label for="name">Expense name:</label>
	<input id="name" type="text" bind:value={expense.name} />

	<CreditorSelect bind:selected={expense.payer} />

	<label for="amount">Amount:</label>
	<input id="amount" type="number" bind:value={expense.amount} />

	<DebtorsSelect bind:selected={expense.debtors} />

	<Error {error} />

	<div id="btns">
		{#if $manager.mode == Mode.EditExpense}
			<button id="delete" on:click={_delete}>Delete</button>
		{/if}

		<input type="submit" />

		<button on:click={dismiss}>Close</button>
	</div>
</form>

<style>
	button,
	input[type='submit'] {
		border-radius: 7px;
		padding: 0.6em;
		padding-left: 7%;
		padding-right: 7%;
		margin: 1%;
	}
	#btns {
		display: flex;
		justify-content: center;
	}
	#delete {
		background-color: var(--c4);
	}
</style>
