<script>
	import { onMount } from 'svelte'

	let pages = [
		{
			name: 'Home',
			path: '/'
		},
		{
			name: 'About',
			path: '/about'
		},
		{
			name: 'Landing',
			path: '/landing'
		},
		{
			name: 'Settings',
			path: '/settings'
		}
	]

	onMount(() => {
		pages.forEach((page) => {
			page.active = page.path === window.location.pathname
		})

		pages = pages // trigger reactivity
	})
</script>

<nav>
	{#each pages as page}
		<a href={page.path} aria-current={page.active ? 'page' : null}>{page.name}</a>
	{/each}
</nav>

<style>
	nav {
		display: flex;
		gap: var(--size-3);
	}

	a {
		text-decoration: none;
	}

	a[aria-current='page'] {
		text-decoration: underline;
	}
</style>
