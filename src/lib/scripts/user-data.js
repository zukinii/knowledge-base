// export getUserData and saveUserData functions
// read and write the data from/to indexedDB

import { openDB } from 'idb'

const dbPromise = openDB('user-data', 1, {
	upgrade(db) {
		db.createObjectStore('user-data')
	}
})

export async function getUserData() {
	return (await dbPromise).get('user-data', 'data')
}

export async function saveUserData(data) {
	return (await dbPromise).put('user-data', data, 'data')
}
