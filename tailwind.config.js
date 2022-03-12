const settingsScreens = require("./tailwind.settings.screens")
const settingsFontSizes = require("./tailwind.settings.fontsizes")

module.exports = {
  content: ["./app/**/*.{jsx,js}"],
  theme: {
    extend: {},
    screens: settingsScreens,
    fontSize: settingsFontSizes,
  },
  plugins: [],
}
