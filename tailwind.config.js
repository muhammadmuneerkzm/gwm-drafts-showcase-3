/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    
    colors: {
      ...colors,
      'primary': {
        '50': '#F3F0FF',
        '100': '#E5DBFF',
        '200': '#D0BFFF',
        '300': '#B392FF',
        '400': '#9A6BFF',
        '500': '#805AD5',
        '600': '#6842A3',
        '700': '#513180',
        '800': '#3A225D',
        '900': '#291749',
        '950': '#120C24'
      },
      'secondary': {
        '50': '#F8F8FF',
        '100': '#ECE9FF',
        '200': '#DDD4FF',
        '300': '#CAB7FF',
        '400': '#B08CFF',
        '500': '#9662D5',
        '600': '#7541A3',
        '700': '#5B3180',
        '800': '#43225D',
        '900': '#301649',
        '950': '#140C24'
      },
    },
  },
  plugins: [],
};

console.log(colors.blue)

// /** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");

// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//     colors: {
//       ...colors,
//       primary: {
//         DEFAULT: '#2C3E50', // Dark Blue
//       },
//       secondary: {
//         DEFAULT: '#36454F', // Charcoal
//       },
//       // ... other color customizations
//     },
//   },
//   plugins: [],
// };