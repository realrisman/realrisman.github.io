/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				xl: '1024px'
			}
		},
		extend: {
			colors: {
				primary: {
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
					950: '#082f49'
				},
				dark: {
					100: '#1e293b',
					200: '#0f172a',
					300: '#020617'
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace']
			},
			animation: {
				gradient: 'gradient 8s linear infinite',
				float: 'float 3s ease-in-out infinite',
				'fade-in': 'fade-in 0.5s ease-out'
			},
			keyframes: {
				gradient: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				}
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '100%' // add required value here
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
