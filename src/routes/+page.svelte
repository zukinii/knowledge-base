<script>
	import { t } from '$lib/translations'
	import { onMount } from 'svelte'

	let userData = null

	onMount(async () => {
		if (typeof indexedDB === 'undefined') {
			console.error('IndexedDB is not available in this environment')
			return
		}

		const { getUserData, saveUserData } = await import('$lib/scripts/user-data')
		await saveUserData({ name: 'John Doe' })
		userData = await getUserData()
		console.log(userData)
	})
</script>

<svelte:head>
	<title>{$t('home.title')}</title>
</svelte:head>
