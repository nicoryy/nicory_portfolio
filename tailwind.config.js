/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '1/2vh': '50vh',
        '1/3vh': '33.3333vh',
        '2/3vh': '66.6666vh',
        '1/4vh': '25vh',
        '2/4vh': '50vh',
        '3/4vh': '75vh',
        '1/5vh': '20vh',
        '2/5vh': '40vh',
        '3/5vh': '60vh',
        '4/5vh': '80vh',
        '1/6vh': '16.6666vh',
        '2/6vh': '33.3333vh',
        '3/6vh': '50vh',
        '4/6vh': '66.6666vh',
        '5/6vh': '83.3333vh',
        '1/12vh': '8.3333vh',
        '2/12vh': '16.6666vh',
        '3/12vh': '25vh',
        '4/12vh': '33.3333vh',
        '5/12vh': '41.6666vh',
        '6/12vh': '50vh',
        '7/12vh': '58.3333vh',
        '8/12vh': '66.6666vh',
        '9/12vh': '75vh',
        '10/12vh': '83.3333vh',
        '11/12vh': '91.6666vh',
        'fullvh': '100vh',
      },
      colors:{
        'purple1': '#9f00c4'
      },
      dropShadow: {
        '3xl': '50px 20px 20px rgba(72,31,81, 1)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      screens: {
        'xs': '426px',
        '2xs': '320px',
      },
    },
  },
  plugins: [],
}