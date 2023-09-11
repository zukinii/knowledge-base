import { loadTranslations, defaultLocale, locales } from '$lib/translations'

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }) => {
	const { pathname } = url

	// TODO: get lang from cookie, user session, ...

	const availableLocales = locales.get() // ['en', 'de', ...]

	// get locale from lang get parameter
	const langParam = url.searchParams.get('lang')

	// use default locale if langParam is not in availableLocales
	const initLocale = availableLocales.includes(langParam) ? langParam : defaultLocale

	await loadTranslations(initLocale, pathname) // keep this just before the `return`

	return {}
}
