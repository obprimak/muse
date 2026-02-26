import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts,svx}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Cormorant Garamond', 'Georgia', 'serif'],
				sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
			},
			colors: {
				slate: {
					850: '#1a1f2e',
					950: '#0c0f1a'
				},
				gold: {
					DEFAULT: '#c9a84c',
					50: '#fdf8eb',
					100: '#f9ecc8',
					200: '#f3d88e',
					300: '#ecc354',
					400: '#c9a84c',
					500: '#b08f3a',
					600: '#8f7330',
					700: '#6e5825',
					800: '#4d3d1a',
					900: '#2c2310'
				},
				blush: {
					DEFAULT: '#d4a0a0',
					50: '#faf2f2',
					100: '#f5e5e5',
					200: '#e8c4c4',
					300: '#d4a0a0',
					400: '#c08080',
					500: '#a86060',
					600: '#8a4a4a',
					700: '#6b3838',
					800: '#4d2828',
					900: '#301919'
				},
				cream: {
					DEFAULT: '#f5f0e8',
					50: '#faf8f4'
				}
			},
			backgroundImage: {
				'luxury-gradient': 'linear-gradient(135deg, #0c0f1a 0%, #1a1f2e 50%, #334155 100%)',
				'card-gradient': 'linear-gradient(135deg, #0c0f1a 0%, #1a1f2e 100%)',
				'gold-gradient': 'linear-gradient(135deg, #b08f3a 0%, #c9a84c 50%, #ecc354 100%)'
			},
			letterSpacing: {
				editorial: '0.08em'
			}
		}
	},
	plugins: [typography]
};
