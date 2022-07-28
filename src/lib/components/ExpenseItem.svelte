<script lang="ts">
	import { onMount } from 'svelte';

	import { manager } from '../stores';
	import type { Expense } from './../splitter';

	export let expense: Expense;
	export let isSelected: boolean = false;

	let showCount = 2;
	onMount(() => (showCount = screen.width < 500 ? 2 : 3));

	function debtors(debtors: Set<string>): string {
		let names = debtors.values();
		// There shouldn't be any expense without debtors
		// so we will set res to first for now and i will be 1
		let res = names.next().value;
		let i = 1;

		while (i < showCount && i < debtors.size) {
			res += `, ${names.next().value}`;
			i += 1;
		}

		if (i < debtors.size) {
			res += ` and ${debtors.size - i} ${i == debtors.size - 1 ? 'other' : 'others'}`;
		}
		return res;
	}
	function click(event: MouseEvent) {
		if ((event.target as HTMLElement).classList.contains('unselectable')) return;
		manager.editExpense(expense);
	}
</script>

<tr on:click={click} class:selected={isSelected}>
	<td class="unselectable">
		<input type="checkbox" value={expense.name} bind:checked={isSelected} class="unselectable" />
	</td>
	<td>{expense.name}</td>
	<td>{expense.payer}</td>
	<td>{expense.amount.toLocaleString()}</td>
	<td>{debtors(expense.debtors)}</td>
	<td class="symbol"> &rsaquo; </td>
</tr>

<style>
	tr {
		-webkit-transition: background-color 150ms linear;
		-ms-transition: background-color 150ms linear;
		transition: background-color 150ms linear;
	}
	tr:hover {
		box-shadow: 0 1px 15px -5px var(--c3);
		transform: scale(1);
	}
	tr:nth-child(odd) {
		background-color: var(--c2);
	}
	td {
		text-align: center;
		padding: 0.3em;
		padding-left: 0.4em;
	}
	@media (max-width: 500px) {
		td {
			font-size: 0.9em;
		}
	}
	.symbol {
		font-size: 1.8em;
	}
	.selected {
		background-color: var(--c3) !important;
		color: var(--c1);
		-webkit-transition: background-color 150ms linear;
		-ms-transition: background-color 150ms linear;
		transition: background-color 150ms linear;
	}
	input {
		accent-color: var(--c2);
	}
</style>
