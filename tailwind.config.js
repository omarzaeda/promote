/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nunito": "'Nunito', sans-serif",
        "noto": "'Noto Sans', sans-serif"
      },
      colors: {
        primary: "#FFDC60",
        primaryBlue: "#5956E8",
        secondary: {
          main: '#292930',
          darkGray: "#555555",
          offWhite: "#F6F6F6",
        },
      }

    },
  },
  plugins: [],
};
