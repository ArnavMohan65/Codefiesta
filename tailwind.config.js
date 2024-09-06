import {colors, nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // colors:{
    //   'glowingGreen':'#0F7909',
    // },
    extend: {
      colors:{
        shinyGreen:{
          100: '#0F7909',
        },
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
