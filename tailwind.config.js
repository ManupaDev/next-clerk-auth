/** @type {import('tailwindcss').Config} */

export const content = [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
]
export const theme = {
  extend: {
    fontFamily: {
      ['sans']: ['Inter'],
    },
  },
}
export const plugins = []
