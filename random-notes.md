    # example of how to import after onMount

    ```js

    onMount(async () => {
    	const { getUserData } = await import('$lib/scripts/user-data')
    })
