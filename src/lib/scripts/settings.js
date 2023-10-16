// tell the user how much storage they're using and how much they have left
if ('storage' in navigator && 'estimate' in navigator.storage) {
	navigator.storage.estimate().then(function (estimate) {
		console.log('Total storage: ' + estimate.quota)
		console.log('Used storage: ' + estimate.usage)
		console.log('Available storage: ' + (estimate.quota - estimate.usage))
	})
} else {
	console.log('Storage estimation not supported in this browser.')
}
