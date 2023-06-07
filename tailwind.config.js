/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      black: "#000",
      white: "#fff",
      light: "#ecf0f1",
      dark: "#1f1f1f",
      blue: {light:"#0085ff",dark:"#000015"},
      code: {
        sky: "#92dcfc",
        brown: "#d5917b",
        blue: "#009bec",
        yellow:"#ffd92d",
        green: "#5a9b5a",
        lightgreen: "#aef1db",
      }
    },
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
