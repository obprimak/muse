import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		target: 'esnext',
		cssTarget: 'esnext'
	},
	css: {
		postcss: './postcss.config.js'
	}
});
