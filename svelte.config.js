import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx'],
			layout: {
				blog: join(__dirname, 'src/lib/components/blog/BlogPostLayout.svelte')
			}
		})
	],
	kit: {
		adapter: adapter({
			runtime: 'nodejs20.x'
		})
	}
};

export default config;
