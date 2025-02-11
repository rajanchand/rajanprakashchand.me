/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./static/script.js"],
  darkMode: "class",
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      inset: {
        '17': '68px',
        '26': '104px'
      },
      colors: {
        'dark-gray-1': '#3f3f46',
        'dark-gray-2': '#52525b',
        'dark-gray-3': '#71717a',
        'dark-gray-4': '#27272a',
        'dark-gray-5': '#18181b',
        'light-gray-1': '#a1a1aa',
        'light-gray-2': '#d4d4d8',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
