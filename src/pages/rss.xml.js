import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
	return rss({
		title: 'Blog de Chava',
		description: 'Mi camino aprendiendo Astro en Programación Web 2 - CETI Colomos',
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
		customData: `<language>es-mx</language>`,
	});
}
