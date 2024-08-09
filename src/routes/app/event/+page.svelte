<script lang="ts">
	import ExpenseList from '$lib/components/event/ExpenseList.svelte';
	import ModalController from '$lib/components/shared/ModalController.svelte';
	import PersonList from '$lib/components/event/PersonList.svelte';
	import Results from '$lib/components/event/Results.svelte';
	import { config, manager } from '$lib/stores';
	import Loading from '$lib/components/shared/Loading.svelte';
	import Modal from '$lib/components/shared/Modal.svelte';
	// TODO : make focused buttons recognizable
	// TODO : animate buttons when clicked (8,29,32 of the blog post:)
	// TODO : get expense if from query
	// TODO : provide a way to go back to app home
	// https://dev.to/webdeasy/top-20-css-buttons-animations-f41
	// TODO : if couldn't load event and db is supported return to app home
	// FIXME : It takes two back buttons to go back
	// TODO : maybe add loading for this
	const eventId = $config.currentEvent;
	let promise: Promise<void>;
	console.log('eventId', eventId);
	if (eventId > 0) {
		promise = manager.initEvent(eventId);
	}
	// @ts-expect-error
	window.clearPeople = function () {
		$manager.killPeople($manager.people);
	};
	// @ts-expect-error
	window.addPeople = function (n: number) {
		for (let i = 0; i < n; i++) {
			manager.addPerson(i.toString());
		}
	};
	// @ts-expect-error
	window.timeEvaluate = function () {
		console.time();
		manager.evaluateExpenses();
		console.timeEnd();
	};
</script>

{#await promise}
	<Modal><Loading>Loading the event..</Loading></Modal>
	<div class="empty spave" />
{:then _}
	<PersonList />
	<hr />
	<ExpenseList />
	<ModalController />
	<hr />
	<Results />
{/await}

<style>
	hr {
		border: 1px solid var(--c2);
		border-radius: 5px;
		margin: 20px;
		margin-left: 50px;
		margin-right: 50px;
	}
</style>
