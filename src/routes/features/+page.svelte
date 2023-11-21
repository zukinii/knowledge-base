<script>
	import { onMount } from 'svelte'

	let features = []

	onMount(async () => {
		// Check for IndexedDB support
		const indexedDBSupported = 'indexedDB' in window

		// Check for Storage Estimation support
		const storageEstimationSupported = 'storage' in navigator && 'estimate' in navigator.storage

		features = [
			{ name: 'IndexedDB', supported: indexedDBSupported },
			{ name: 'Storage Estimation', supported: storageEstimationSupported }
		]
	})
</script>

<h1>Available Features</h1>

<ul>
	{#each features as feature}
		<li>
			{#if feature.supported}
				✅ {feature.name} is supported
			{:else}
				❌ {feature.name} is not supported
			{/if}
		</li>
	{/each}
</ul>
