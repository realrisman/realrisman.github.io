import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://realrisman.github.io/',
	integrations: [sitemap(), partytown()],
	vite: {
		plugins: [tailwindcss()]
	}
});
