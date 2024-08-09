<script lang="ts">
	import { manager } from '$lib/stores';
	import { Mode } from '../../manager';
	import DeleteDialog from './DeleteDialog.svelte';
	import ExpenseEditor from '../event/ExpenseEditor.svelte';
	import Modal from '../shared/Modal.svelte';
	import EventForm from '../app-home/EventForm.svelte';

	$: visible = $manager.mode !== Mode.None;
	const modesNeedingEditor = [Mode.CreateExpense, Mode.EditExpense];
	const modesNeedingDelete = [Mode.RemovePerson, Mode.DeleteExpense];
	// TODO : Create expense isn't usable instantly when clicking outside of the modal
</script>

{#if $manager.mode != Mode.None}
	<Modal {visible}>
		{#if modesNeedingEditor.includes($manager.mode)}
			<ExpenseEditor dismiss={manager.dismissModal} />
		{:else if modesNeedingDelete.includes($manager.mode)}
			<DeleteDialog />
		{:else if $manager.mode == Mode.EditExpense}
			<ExpenseEditor dismiss={manager.dismissModal} />
		{:else if $manager.mode == Mode.CreateEvent}
			<EventForm dismiss={manager.dismissModal} />
		{/if}
	</Modal>
{/if}
