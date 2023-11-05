<script>
	import { t } from '$lib/translations'
	import { userData } from '$lib/scripts/stores/user-store'
	import Editor from '$lib/components/editor/editor.svelte'
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
