const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}"
	],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: {
				"makepurple-gradient": `linear-gradient(-80deg, ${colors.pink["600"]}, ${colors.violet["600"]}, ${colors.blue["500"]})`
			}
		},
		fontFamily: {
			sans: ["Inter", ...defaultTheme.fontFamily.sans],
			mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
		}
	},
	plugins: []
};
