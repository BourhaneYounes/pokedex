/** @type {import('tailwindcss').Config}*/

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'custom-green' : '#C1D0B5',
			}
		},
	},

	plugins: []
};

module.exports = config;
