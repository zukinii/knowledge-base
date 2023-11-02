export const prefersReducedMotion = () => {
	const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
	return mediaQuery.matches
}

export const hasIndexedDB = () => {
	return 'indexedDB' in window
}
