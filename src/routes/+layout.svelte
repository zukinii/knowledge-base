<script>
	import '$lib/styles/global.css'

	import { onNavigate } from '$app/navigation'
	import { onMount } from 'svelte'

	onNavigate((navigation) => {
		if (!document.startViewTransition) return

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})

	onMount(async () => {
		const { initUserData } = await import('$lib/scripts/user-data')

		initUserData()
	})
</script>

<svelte:head>
	<meta name="theme-color" content="#000000" />
</svelte:head>

<slot />
