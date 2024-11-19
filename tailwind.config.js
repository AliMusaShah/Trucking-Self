/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        defaultBlue: "#3e85fb", // Adding the new custom teal color
      },
    },
  },
  plugins: [],
};
