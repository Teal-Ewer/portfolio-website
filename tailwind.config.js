module.exports = {
	mode: "jit",
	content: ["./public/**/*.html"],
	darkMode: "false", // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
};
