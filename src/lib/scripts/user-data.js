// export getUserData and saveUserData functions
// read and write the data from/to indexedDB

import { openDB } from 'idb' // throws error if not in browser env
import { userData } from '$lib/scripts/stores/user-store'
import { browser } from '$app/environment'
import { hasIndexedDB } from '$lib/scripts/utils/user-preferences'

// TODO: jsdoc doesn't seem to work, remove it and use comments to define userData structure instead

/**
 * @typedef {Object} Note
 * @property {string} title - The title of the note.
 * @property {string} content - The content of the note.
 * @property {Date} createdDate - The date the note was created.
 */

/**
 * @typedef {("light" | "dark" | "system")} DarkModePreference
 */

// Define the structure for user data, including a notes property
/**
 * @typedef {Object} UserData
 * @property {string} name - The name of the user.
 * @property {string} email - The email address of the user.
 * @property {Note[]} notes - An array of notes associated with the user.
 * @property {Date} createdDate - The date the user was created.
 * @property {Date} lastUpdatedDate - The date the user was last updated.
 * @property {DarkModePreference} darkModePreference - The user's dark mode preference.
 */

const defaultData = {
	name: '',
	email: '',
	notes: [],
	createdDate: new Date(),
	lastUpdatedDate: new Date(),
	darkModePreference: 'system'
}

const dbPromise = openDB('user-data', 1, {
	upgrade(db) {
		db.createObjectStore('user-data')
	}
})

/**
 * Get user data
 * @returns {Promise<UserData | undefined>} The user data or undefined if not found.
 */
export async function getIdbUserData() {
	return (await dbPromise).get('user-data', 'data')
}

/**
 * Save user data
 * @param {UserData} data - The user data to be saved.
 * @returns {Promise<void>} A promise that resolves when the data is saved.
 */
export async function saveIdbUserData(data) {
	return (await dbPromise).put('user-data', data, 'data')
}

export async function initUserData() {
	const hasIdbAccess = browser && hasIndexedDB()
	const data = hasIdbAccess ? await getIdbUserData() : undefined

	if (data) {
		userData.set(data)
	} else {
		if (hasIdbAccess) await saveIdbUserData(defaultData)
		userData.set(defaultData)
	}

	console.log('user data initialized', data)
}
