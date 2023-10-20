<script>
	import Nav from './nav.svelte'
	import Footer from './footer.svelte'
</script>

<a href="#main">Skip to main content</a>
<Nav />
<main id="main">
	<slot />
</main>
<Footer />

<style>
	a {
		position: fixed;
		top: 0;
		left: 0;
		padding: var(--size-3);
		background-color: var(--bg-1);
		color: var(--text-1);
		z-index: var(--layer-skip-link);
		transform: translateY(-100%);
		transition: transform var(--transition);

		&:focus-visible {
			transform: translateY(0);
		}
	}
</style>
