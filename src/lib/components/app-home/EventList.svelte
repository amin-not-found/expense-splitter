<script lang="ts">
	import { EventOrder, type ExpenseEvent } from '$lib/database';
	import { manager } from '$lib/stores';
	import { onMount } from 'svelte';
	import EventItem from './EventItem.svelte';
	export let sortOrder = EventOrder.Created;
	const orders = [EventOrder.Created, EventOrder.Name, EventOrder.Opened];
	let events: ExpenseEvent[] = [];
	// TODO : handle error and cases where it might take a while
	// TODO : add pagingg for events
	function setEvents(order: EventOrder) {
		$manager
			.getEvents(order)
			.then((_events) => {
				if (!_events) return;
				if (order === EventOrder.Name) events = _events;
				else events = _events.reverse();
			})
			.catch((a) => console.log('[Database] Error:', a));
	}
	onMount(() => setEvents(sortOrder));
	$: setEvents(sortOrder);
</script>

<div class="wrapper">
	<select id="sort-by" bind:value={sortOrder}>
		{#each orders as order}
			<option value={order}>
				&#8595; {order}
			</option>
		{/each}
	</select>
	<button on:click={manager.eventDialog}> Create new event </button>
</div>

{#each events as event}
	<EventItem {event} />
{/each}

<style>
	.wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
	button {
		width: 47%;
		height: 2.7em;
		border-radius: 9px;
	}
	select {
		border-radius: 9px;
		width: 47%;
		height: 2.5em;
	}
	@media (max-device-width: 360px) {
		button {
			width: 90%;
		}
		select{
			width:86%
		}
	}
</style>
