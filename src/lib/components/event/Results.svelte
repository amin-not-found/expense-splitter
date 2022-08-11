<script lang="ts">
	// based on github.com/janosh/svelte-bricks
	import { scale } from 'svelte/transition';
	import { manager } from '$lib/stores';
	import type { Transaction } from '$lib/splitter';
	import Result from './Result.svelte';

	export let gap = 13;
	export let minColWidth = 160;

	type Item = [string, Transaction[]];
	let itemsToCols: Item[][];
	let masonryWidth: number;

	let records: Map<string, Transaction[]> = new Map();
	let getId = (item: Item) => item[0];

	function evaluate() {
		records = manager.evaluateExpenses();
	}

	evaluate();

	$: nCols = Math.min(records.size, Math.floor(masonryWidth / (minColWidth + gap)) || 1);

	$: itemsToCols = Array.from(records).reduce(
		(cols: Item[][], item, idx) => {
			// Get rid of people without any debts
			if (item[1].length > 0) cols[idx % cols.length].push(item);
			return cols;
		},
		Array.from({length:nCols}, () => []) // prettier-ignore
	);
	// TODO : automatically evaluate if number of people isn't big or make records empty
	// FIXME : Position of cards don't change after deleting some of cards(actually it might be just with one card even in the beginning)
</script>

<div class="btn-wrapper">
	<button on:click={evaluate}>Settle debts</button>
</div>
<div class="masonry" bind:clientWidth={masonryWidth} style:gap="{gap}px">
	{#each itemsToCols as col}
		<div class="col" style="gap: {gap}px;">
			{#each col as item (getId(item))}
				<div transition:scale>
					<Result creditor={item[0]} debts={item[1]} />
				</div>
			{/each}
		</div>
	{/each}
</div>
<!-- margin borrom doesn't work right so I'm using <br> to add some space at the bottom -->
<br />

<style>
	.btn-wrapper {
		text-align: center;
	}
	button {
		padding: 10px;
		border-radius: 10px;
	}
	div.masonry {
		margin: 10px;
		display: flex;
		justify-content: center;
		overflow-wrap: anywhere;
		box-sizing: border-box;
	}
	div.masonry div.col {
		display: grid;
		height: max-content;
		width: 100%;
	}
</style>
