<script>
	import { userData } from '$lib/scripts/stores/user-store'
	import { writable } from 'svelte/store'

	let editable

	if (!userData.notes) {
		userData.notes = []
	}

	const notes = writable(userData.notes)

	notes.subscribe((notes) => {
		userData.notes = notes
	})

	const selectNote = (note) => {
		notes.update((notes) => {
			notes.forEach((n) => (n.selected = false))
			note.selected = true
			return notes
		})
	}

	const addNote = () => {
		notes.update((notes) => {
			const newNote = {
				title: 'New Note',
				content: '',
				selected: true
			}
			notes.forEach((n) => (n.selected = false))
			notes.push(newNote)
			return notes
		})
	}

	const deleteNote = (note) => {
		notes.update((notes) => {
			const index = notes.indexOf(note)
			notes.splice(index, 1)
			if (notes.length > 0) {
				notes[0].selected = true
			}
			return notes
		})
	}

	const saveNote = (note) => {
		notes.update((notes) => {
			const index = notes.indexOf(note)
			notes[index] = note
			return notes
		})
	}

	const getSelectedNote = () => {
		let selectedNote = null
		notes.update((notes) => {
			selectedNote = notes.find((n) => n.selected)
			return notes
		})
		return selectedNote
	}

	export { notes, selectNote, addNote, deleteNote }

	// get selected note if there is one, otherwise create a new one and select it
	let selectedNote = getSelectedNote()
	if (!selectedNote) {
		addNote()
		selectedNote = getSelectedNote()
	}
</script>

<div
	contenteditable
	bind:this={editable}
	on:input={() => (selectedNote.content = editable.innerHTML)}
/>

<style>
	[contenteditable] {
		border: 1px solid #ccc;
		padding: 1rem;
		width: min(50ch, 100%);
		min-height: 10rem;
	}
</style>
