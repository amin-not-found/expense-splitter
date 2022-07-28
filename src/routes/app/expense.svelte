<script lang="ts">
	import ExpenseList from '../../lib/components/ExpenseList.svelte';
	import ModalController from '../../lib/components/ModalController.svelte';
	import PersonList from '../../lib/components/PersonList.svelte';
	import Results from '../../lib/components/Results.svelte';
	// TODO : make focused buttons recognizable
	// TODO : animate buttons when clicked (8,29,32 of the blog post:)
	// TODO : get expense if from query
	// https://dev.to/webdeasy/top-20-css-buttons-animations-f41
</script>

<PersonList />
<hr />
<ExpenseList />
<ModalController />
<hr />
<Results />

<style>
	hr {
		border: 1px solid var(--c2);
		border-radius: 5px;
		margin: 20px;
		margin-left: 50px;
		margin-right: 50px;
	}
</style>
