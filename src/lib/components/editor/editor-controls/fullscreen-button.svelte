<script>
	import Icon from '$lib/components/common/icon.svelte'

	let fullscreenButton
	let isFullscreen = false

	const toggleFullscreen = async () => {
		if (!document.fullscreenElement) {
			await document.documentElement.requestFullscreen()
		} else {
			await document.exitFullscreen()
		}

		isFullscreen = !!document.fullscreenElement
	}
</script>

<button bind:this={fullscreenButton} on:click={toggleFullscreen}>
	<Icon name={isFullscreen ? 'fullscreen-exit' : 'fullscreen'} />
</button>

<style>
	button {
		padding: var(--size-1);
		border: 1px solid var(--border-color-1);
		display: flex;
		font-size: 1rem;
	}
</style>
