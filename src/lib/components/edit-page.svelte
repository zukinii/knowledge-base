<script>
	import NotesSidebar from './notes-sidebar.svelte'
	import Editor from './editor/editor.svelte'
</script>

<section>
	<NotesSidebar />
	<Editor />
</section>

<style>
	section {
		display: grid;
		grid-template-columns: minmax(0, 1fr);

		@media (--md-n-above) {
			grid-template-columns: 1fr 3fr;
		}
	}
</style>
