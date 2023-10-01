<script>
	import { onMount } from 'svelte'
	import Icon from '@iconify/svelte'

	export let title
	export let open = false
	let details
	let content

	// TODO: make open / close animation work

	onMount(() => {
		details.addEventListener('toggle', () => {
			open = details.open

			// set height to the height of the content. add '-closing' class while closing
			const isClosing = !open

			if (isClosing) {
				details.classList.add('-closing')

				content.addEventListener(
					'transitionend',
					() => {
						content.style.height = '0px'
						details.classList.remove('-closing')
					},
					{ once: true }
				)
			} else {
				content.style.height = `${content.scrollHeight}px`
			}
		})
	})
</script>

<details {open} bind:this={details}>
	<summary>
		<div>{title}</div>
		<Icon icon="mdi:chevron-down" />
	</summary>
	<div bind:this={content}>
		<slot />
	</div>
</details>

<style>
	details {
		--icon-rotate: 0deg;
		--content-height: 0px;
	}

	details[open] {
		--icon-rotate: 180deg;
		--content-height: auto;
	}

	summary {
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--size-3);
		cursor: pointer;
	}

	summary :global(svg) {
		transform: rotateX(var(--icon-rotate));

		@media (--motionOK) {
			transition: transform var(--transition);
		}
	}

	summary + div {
		/* height: var(--content-height); */
		overflow: hidden;

		@media (--motionOK) {
			transition: height var(--transition);
		}
	}
</style>
