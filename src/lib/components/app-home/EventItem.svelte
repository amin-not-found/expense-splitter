<script lang="ts">
	import type { ExpenseEvent } from '$lib/database';
	import { config, manager } from '$lib/stores';
	export let event: ExpenseEvent;
	let created = new Date(event.createdTime).toLocaleString();
	let opened = new Date(event.openedTime).toLocaleString();
	function gotoEvent() {
		console.log(event.createdTime);
		config.setCurrentEvent(event.createdTime);
		$manager.goToRoute('/app/event');
	}
	// TODO : make item look clickable
</script>

<div class="event" on:click={gotoEvent}>
	<spacn class="event-name">{event.name}</spacn>
	<br />
	Created at {created}
	<br />
	Last opened at {opened}
</div>

<style>
	.event {
		margin: 5px;
		margin-bottom: 10px;
		padding: 7px;
		background-color: var(--c2);
		color: var(--c5);
		border-radius: 7px;
	}
	.event:hover {
		box-shadow: 0px 0px 7px 1px var(--c2);
	}
	.event-name {
		font-size: x-large;
	}
</style>
