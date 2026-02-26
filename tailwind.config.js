import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,svx}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Cormorant Garamond', 'Georgia', 'serif'],
				sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
			},
			colors: {
				gold: {
					DEFAULT: '#c9a84c',
					light: '#d4b96a',
					dark: '#b8941f',
					50: '#fdf8eb',
					100: '#f9edc8',
					200: '#f3dba0',
					300: '#e8c36e',
					400: '#d4b248',
					500: '#c9a84c',
					600: '#b08a30',
					700: '#8f6c28',
					800: '#755626',
					900: '#634824'
				},
				blush: {
					DEFAULT: '#d4a0a0',
					light: '#e8c4c4',
					dark: '#b87878'
				},
				slate: {
					DEFAULT: '#1e293b',
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
					950: '#020617'
				},
				dark: {
					DEFAULT: '#0f172a',
					muted: '#94a3b8',
					card: '#1e293b'
				}
			},
			backgroundImage: {
				'luxury-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
				'card-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
				'gold-gradient': 'linear-gradient(135deg, #b8941f 0%, #c9a84c 50%, #d4b96a 100%)'
			}
		}
	},
	plugins: [typography]
};
