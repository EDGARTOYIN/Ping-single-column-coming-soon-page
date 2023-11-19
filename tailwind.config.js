/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-custom": "hsl(0, 0%, 59%)",
        "very-dark-blue": "hsl(209, 33%, 12%)",
        "blue-custom": "hsl(223, 87%, 63%)",
        "pale-blue-custom": "hsl(223, 100%, 88%)",
        "light-red-custom": "hsl(354, 100%, 66%)",
      },
      fontFamily: {
        "default-ff": "Libre Franklin, sans-serif",
      },
    },
  },
  plugins: [],
};
