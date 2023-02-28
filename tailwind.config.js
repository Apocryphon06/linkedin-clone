/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {

      fontFamily: {
        sansRegular: ['OpenSans Regular'],
        sansMedium: ['OpenSans Medium'],
        sansBold: ['OpenSans Bold'],
        sansExtrabold: ['OpenSans ExtraBold'],
        sansSemibold:['OpenSans Semibold'],
      },
      colors: {
        linkedinBlue: '#0A66C2',
        gray: '#666666',
        lightBlue: '#70B5F9',
        lightGreen: '#7FC15E',
        lightBrown: '#915907',
        lightOrange: '#E7A33E',
        lightRed: '#F5987E',
        whitesmoke: '#F3F2EF',
      },
    },
  },
  plugins: [],
}
