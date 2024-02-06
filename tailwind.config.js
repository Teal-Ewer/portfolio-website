module.exports = {
	mode: "jit",
	content: ["./public/**/*.html"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
