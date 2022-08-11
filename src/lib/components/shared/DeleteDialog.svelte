<script lang="ts">
	import { manager } from '$lib/stores';
	import { Mode } from '../../manager';

	function getMessage() {
		if (!$manager.data) {
			return '';
		}
		let message = 'Are you sure you want to';
		if ($manager.mode == Mode.RemovePerson) {
			message += ` remove "${$manager.data}"?`;
		} else {
			let num = $manager.data.length;
			message += ` delete ${num} expense`;
			message += num > 1 ? 's?' : '?';
		}
		return message;
	}

	function confirm() {
		manager.confirmDelete();
		manager.dismissModal();
	}
</script>

<span> {getMessage()} </span>
<div>
	<button on:click={manager.dismissModal}> No </button>
	<button id="confirm-btn" on:click={confirm}> Yes </button>
</div>

<style>
	span {
		font-size: large;
	}
	div {
		margin-top: 1%;
		padding: 4%;
		padding-bottom: 2%;
		display: flex;
		flex-direction: row-reverse;
		align-content: stretch;
	}
	button {
		flex: auto;
		margin: 2%;
		margin-bottom: 0;
		padding: 10px;
		border-radius: 10px;
	}
	#confirm-btn {
		background-color: var(--c4);
	}
</style>
