<script>
	import { onMount } from 'svelte'
	import { t } from '$lib/translations'
	import Editor from '$lib/components/editor.svelte'

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

<div>
	<Editor />
	{#if userData}
		<p>{$t('home.welcome', { name: userData.name })}</p>
	{/if}
</div>
