<script>
	import { page } from '$app/stores'

	// log the error to the console if there is one
	$: $page.error && console.error($page.error)
</script>

<main>
	<!-- TODO: translate based on common error status -->
	<h1>Error {$page.status}</h1>
	<p>{$page.error?.message}</p>
</main>

<style>
</style>
