/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'accent': '#2337ff',
				'black': '#0f1219',
				'gray': '#60739f',
				'grayLight': '#e5e9f0',
				'grayDark': '#222939'
			},
			boxShadow: {
				card: '0 2px 6px rgba(96, 115, 159, 25%), 0 8px 24px rgba(96, 115, 159, 33%), 0 16px 32px rgba(96, 115, 159, 33%)'
			}
		},
	},
	plugins: [],
}
