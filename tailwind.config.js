module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'pupylinux': ['"Poppins"', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
