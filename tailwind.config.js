const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	purge: ["./public/**/*.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#005666",
				teal: colors.teal,
				cyan: colors.cyan,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
