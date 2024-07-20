/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '660': {'max': '660px'}, // Laptop max-width
        '600': {'max': '600px'}, // Laptop max-width
        '900': {'max': '900px'},  // Tablet max-width
        'desktop-max': {'max': '1279px'}, // Desktop max-width
      },
    },
  },
  plugins: [],
  mode: 'jit',
}
