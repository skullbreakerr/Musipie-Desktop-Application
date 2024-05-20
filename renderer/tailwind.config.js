const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      // use colors only specified 
      "slate-100" : colors.slate[100],
      "slate-200" : colors.slate[200],
      "purple-400": colors.purple[400],
      "transparent": colors.transparent,
      "green-500": colors.green[500],
      "red-300": colors.red[300],
      "gray-500": colors.gray[500],
      "gray-800":colors.gray[800],
      "yellow-300": colors.yellow[300],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
