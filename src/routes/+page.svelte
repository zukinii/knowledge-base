<script>
	import { t } from '$lib/translations'

	const link = 'https://kit.svelte.dev'
</script>

<svelte:head>
	<title>Title</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div class="grid">
	<span>1</span><span>2</span>
</div>

<h1>{$t('common.title')}</h1>
<p>{@html $t('home.text', { link })}</p>

<style>
	h1 {
		color: hsl(var(--gray-9-hsl) / 30%);

		@media (--md-n-above) {
			color: var(--test-color);
		}
	}
</style>
