<script>
	import Nav from './nav.svelte'
	import Footer from './footer.svelte'
</script>

<Nav />
<main id="main">
	<slot />
</main>
<Footer />
