<script>
	import { onMount } from 'svelte'
	import debounce from '$lib/scripts/utils/debounce'
	import { prefersReducedMotion } from '$lib/scripts/utils/user-preferences'
	import Icon from '$lib/components/common/icon.svelte'

	export let title
	export let open = false
	let details
	let summary
	let content

	const initContentHeight = () => {
		if (!content) return

		content.style.height = null
		content.style.height = `${details.open ? content.scrollHeight : 0}px`
	}

	const toggleContent = () => {
		const isClosing = !!details.open

		if (isClosing) {
			// wait for transition since the content is removed once closed
			const onTransitionEnd = () => {
				details.open = false
				details.classList.remove('-closing')
			}

			content.addEventListener('transitionend', onTransitionEnd, { once: true })

			details.classList.add('-closing')
			content.style.height = '0px' // trigger transition

			if (prefersReducedMotion()) onTransitionEnd()
		} else {
			details.open = true
			content.style.height = `${content.scrollHeight}px` // trigger transition
		}
	}

	const handleSummaryClick = (e) => {
		// prevent click to manually control the open state
		e.preventDefault()

		toggleContent()
	}

	const handleResize = () => initContentHeight()

	onMount(() => {
		initContentHeight()

		summary.addEventListener('click', handleSummaryClick)
		window.addEventListener('resize', debounce(handleResize, 100))
	})
</script>

<details {open} bind:this={details}>
	<summary bind:this={summary}>
		<div>{title}</div>
		<Icon name="chevron-down" />
	</summary>
	<div bind:this={content}>
		<slot />
	</div>
</details>

<style>
	details {
		--icon-rotate: 0deg;
		--indent: var(--size-3);
		--border-color: var(--border-color-1);

		overflow: hidden;
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: var(--size-3);
		transition: padding var(--transition);
		border-top: 1px solid var(--border-color);

		&:last-of-type {
			border-bottom: 1px solid var(--border-color);
		}
	}

	details[open]:not(.-closing) {
		--icon-rotate: 180deg;
		--indent: 0rem;

		padding-block-end: var(--size-3);
	}

	summary {
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--size-3);
		padding-block: var(--size-3);
		transition: padding var(--transition);
		cursor: pointer;

		&:hover,
		&:focus-visible {
			padding-inline: var(--indent);
		}

		&:focus {
			outline-offset: -1px;
		}
	}

	summary :global(svg) {
		transform: rotateX(var(--icon-rotate));
		transition: transform var(--transition);
	}

	summary + div {
		transition: height var(--transition);
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: var(--size-3);
	}

	summary + div > :global(:last-child) {
		margin-bottom: 0;
	}
</style>
