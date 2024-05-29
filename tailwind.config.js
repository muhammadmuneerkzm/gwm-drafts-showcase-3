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
        '50': '#FFFBEB',
        '100': '#FEF3C7',
        '200': '#FDE68A',
        '300': '#FCD34D',
        '400': '#FBBF24',
        '500': '#F59E0B',
        '600': '#D97706',
        '700': '#B45309',
        '800': '#92400E',
        '900': '#78350F',
        '950': '#45210B'
      },
      'secondary': {
        '50': '#FFFAF0',
        '100': '#FEE8D5',
        '200': '#FED7AA',
        '300': '#FDBA74',
        '400': '#FB923C',
        '500': '#F97316',
        '600': '#EA580C',
        '700': '#C2410C',
        '800': '#9A3412',
        '900': '#7C2D12',
        '950': '#461D0D'
      }
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