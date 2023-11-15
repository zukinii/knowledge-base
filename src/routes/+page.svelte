<script>
	import { t } from '$lib/translations'
	import { userData } from '$lib/scripts/stores/user-store'
	import EditPage from '$lib/components/edit-page.svelte'
</script>

<svelte:head>
	<title>{$t('home.title')}</title>
</svelte:head>

<div>
	<EditPage />
	{#if userData}
		<p>{$t('home.welcome', { name: userData.name })}</p>
	{/if}
</div>
