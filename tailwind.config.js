/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'plane': "url('https://www.metoffice.gov.uk/static/images/background/location-hub/international/1600x609@2x.png')",
        'castle': "url('https://www.metoffice.gov.uk/public/hero-images/2023/winter/1600x609@2x.jpg')"
      },
    },
  },
  plugins: [],
}

