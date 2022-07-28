<script lang="ts">
	import type { Transaction } from '../splitter';

	export let creditor: string;
	export let debts: Transaction[];
	// TODO : style on hover/active/focus
</script>

<div>
	<h4>{creditor} owes:</h4>
	<ul>
		{#each debts as debt}
			<li><span>{debt.amount.toLocaleString()}</span> to {debt.reciver}</li>
		{/each}
	</ul>
</div>

<style>
	div {
		background-color: var(--c2);
		border-radius: 10px;
		padding: 16px;
	}
	ul {
		list-style-type: none;
		padding-left: 13px;
	}
	li:before {
		content: '- ';
	}
	span {
		color: var(--c3);
	}
</style>
