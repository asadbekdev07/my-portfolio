/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '600': {'max': '600px'}, // Laptop max-width
        '660': {'max': '660px'}, // Laptop max-width
        '800': {'max': '900px'}, 
        '900': {'max': '900px'},  // Tablet max-width
        'min900': {'min': '900px'}, // Desktop max-width
      },
    },
  },
  plugins: [],
  mode: 'jit',
}
