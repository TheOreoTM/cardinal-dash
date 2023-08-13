/** @type {import('tailwindcss').Config} */
export const content = [
	'./pages/**/*.{js,ts,jsx,tsx}',
	'./components/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
	extend: {
		backgroundColor: {
			'cta-button': '#4A82EF',
			'nav': '#2F2F2F',
		},
		borderColor: {
			'nav-button': '#454545',
		},
	},
};
export const plugins = [];
