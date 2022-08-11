<script lang="ts">
	// duration in seconds
	export let duration = 0.8;
	export let size = '150';
</script>

	<div class="wrapper" style="--size: {size}px; --duration: {duration + 's'};">
		{#each [...Array(3).keys()] as version}
			<div class="circle" style="animation-delay: {(duration / 3) * (version - 1) + 's'};" />
		{/each}
	</div>
	<div class="container"><slot /></div>

<style>

	.wrapper {
    margin: auto;
		width: var(--size);
		height: var(--size);
	}
	.circle {
		border-radius: 100%;
		animation-fill-mode: both;
		position: absolute;
		opacity: 0;
		width: var(--size);
		height: var(--size);
		background-color: var(--c3);
		animation: bounce var(--duration) linear infinite;
	}
	@keyframes bounce {
		0% {
			opacity: 0;
			transform: scale(0);
		}
		5% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: scale(1);
		}
	}
  .container{
    font-size: larger;
    text-align: center;
    margin: 10px;
    margin-top: 15px;
  }
</style>
