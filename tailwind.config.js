const colors = require("tailwindcss/colors");

module.exports = {
	content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: {
				"makepurple-gradient": `linear-gradient(-80deg, ${colors.pink["600"]}, ${colors.violet["600"]}, ${colors.blue["500"]})`
			}
		}
	},
	plugins: []
};
