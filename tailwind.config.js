/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        home: "calc(100vh - 300px)",
      },
      dropShadow: {
        highlight: "0px 1px 4px rgba(0, 0, 0, 0.6)",
      },

      keyframes: {
        float: {
          "0%": { transform: "translateY(0)", opacity: "0.8" },
          "50%": { transform: "translateY(-5px)", opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "0.8" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
