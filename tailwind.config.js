/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        45: "45%",
        49: "50%",
        150: "80px",
        18: "18%",
      },
      height: {
        58: "58%",
        38: "38%",
        150: "80px",
        300: "150px",
      },
    },
  },
  plugins: [],
};
