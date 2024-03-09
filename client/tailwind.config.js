/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "custom-black": "#0D1117",
        "custom-white": "#EDDECE",
      },
      fontFamily: {
        head: "Impact",
        body: "Bahnschrift",
      },
    },
  },
  plugins: [],
}

