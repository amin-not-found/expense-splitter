<script lang="ts">
import { manager } from '$lib/stores';

	// useful resources to do so:
	// https://hiddedevries.nl/en/blog/2017-01-29-using-javascript-to-trap-focus-in-an-element
	// https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700
	import { fade, scale } from 'svelte/transition';
	export let visible: boolean = true;
	export let dismiss = manager.dismissModal;
</script>

{#if visible}
	<div id="modal-bg" on:click|self={dismiss} transition:fade>
		<div id="modal" transition:scale={{ duration: 720 }}>
			<slot />
		</div>
	</div>
{/if}

<style>
	#modal-bg {
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
	}
	#modal {
		background-color: var(--c1);
		margin: auto;
		padding: 20px;
		position: absolute;
		transform: translate(-50%, -50%);
		top: 50%;
		left: 50%;
		width: min(500px, 70%);
		border-radius: 10px;
	}
</style>
