/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Frutiger", "sans"], // Use 'sans' for the default sans-serif font
      },
      colors: {
        // primary: "#58111A",
        primary: "#2F4F4F",
        secondary: "#ecc94b",
        // ...
      },
    },
  },
  plugins: [],
};
