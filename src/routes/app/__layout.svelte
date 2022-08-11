<script lang="ts">
	import Loading from '$lib/components/shared/Loading.svelte';
import Modal from '$lib/components/shared/Modal.svelte';
	import { manager } from '$lib/stores';
	import { onMount } from 'svelte';

	let dbPromise: Promise<unknown> = $manager.initDB();
	let awareOfUnsupport = false;

	onMount(() => {
		window.addEventListener('beforeinstallprompt', (e: Event) => {
			manager.setInstallEvent(e);
		});
	});
	// TODO : maybe change components path so they use $lib instead of relative path
    // TODO : change the warning and loading
	// TODO : implement "awareOfUnsupport"
</script>

{#await dbPromise}
    <Modal><Loading>Initializing database..</Loading></Modal>
	<!-- TODO : maybe add some skeleton before database loads -->
{:then}
	<slot/>
{:catch e} 
    <Modal>{e}</Modal>
	{$manager.goToRoute("/app/event")}
{/await}


<style>
</style>
