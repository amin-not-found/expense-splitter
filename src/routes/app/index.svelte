<script lang="ts">
	import { manager } from '$lib/stores';
	import ModalController from '$lib/components/shared/ModalController.svelte';
	import EventList from '$lib/components/app-home/EventList.svelte';
	// TODO : people whose browsers don't support indexeddb don't need to see this
	// Style button to float
</script>

<svelte:head>
	<title>App</title>
</svelte:head>

<section>
	<ModalController />
	<h1>Events:</h1>
	<EventList />
</section>

<style>
	h1{
		margin: 0.7em;
	}
</style>
