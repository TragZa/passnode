/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

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
      colors: {
        gray: "rgb(30,30,30)",
        gray2: "rgb(40,40,40)",
        blue: "rgb(0,40,50)",
        blue2: "rgb(0,80,100)",
        blue3: "rgb(0,200,255)",
        blue4: "rgb(100,220,255)",
        red: "rgb(100,0,0)",
        red2: "rgb(255, 0, 0)",
        red3: "rgb(255, 100, 100)",
        green: "rgb(0, 100, 0)",
        green2: "rgb(0, 255, 0)",
        green3: "rgb(100, 255, 100)"
      },
      screens: {
        '450': '450px',
        '550': '550px',
        '750': '750px',
        '950': '950px',
        '1200': '1200px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true
  }
};
