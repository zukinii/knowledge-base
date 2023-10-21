const debounce = (callback, delay = 200) => {
	let timeoutId

	return (...args) => {
		clearTimeout(timeoutId)
		timeoutId = setTimeout(() => callback(...args), delay)
	}
}

export default debounce
