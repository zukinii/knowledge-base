<script>
	import { userData } from '$lib/scripts/stores/user-store'
</script>

<aside>
	{#if userData.user?.name}
		<p>{userData.user.name}'s notes:</p>
	{/if}
	{#if userData.notes}
		<ul aria-label="Notes">
			{#each userData.notes as note}
				<li>
					<button aria-current={note.selected ? 'true' : null} on:click={() => console.log(note)}>
						{note.title}
					</button>
				</li>
			{/each}
		</ul>
	{:else}
		<p>No notes yet.</p>
	{/if}
</aside>
