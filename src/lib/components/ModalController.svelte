<script lang="ts">
	import { manager } from '../stores';
	import { Mode } from '../state';
	import DeleteDialog from './DeleteDialog.svelte';
	import ExpenseEditor from './ExpenseEditor.svelte';
	import Modal from './Modal.svelte';

	$: visible = $manager.mode !== Mode.None;
	const modesNeedingEditor = [Mode.CreateExpense, Mode.EditExpense];
	const modesNeedingDelete = [Mode.RemovePerson, Mode.DeleteExpense];
	// TODO : Create expense isn't usable instantly when clicking outside of the modal
</script>

{#if $manager.mode != Mode.None}
	<Modal {visible} dismiss={manager.dismissModal}>
		{#if modesNeedingEditor.includes($manager.mode)}
			<ExpenseEditor dismiss={manager.dismissModal} />
		{:else if modesNeedingDelete.includes($manager.mode)}
			<DeleteDialog />
		{:else if $manager.mode == Mode.EditExpense}
			<ExpenseEditor dismiss={manager.dismissModal} />
		{/if}
	</Modal>
{/if}
