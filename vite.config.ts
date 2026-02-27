import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		target: 'esnext',
		cssTarget: 'esnext'
	},
	css: {
		postcss: './postcss.config.js'
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
