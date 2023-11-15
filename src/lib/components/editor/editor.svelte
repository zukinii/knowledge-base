<script>
	import Editable from './editable.svelte'
	import EditorControls from './editor-controls/editor-controls.svelte'
</script>

<section>
	<EditorControls />
	<Editable />
</section>

<style>
	section {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
	}
</style>
