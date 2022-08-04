/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        floating: {
          '0%': { transform: 'translate(0,  0px)' },
          '50%': { transform: 'translate(0, 15px)' },
          '100%': { transform: 'translate(0, -0px)' }
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
