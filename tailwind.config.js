/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#3294f8",
        },
        base: {
          title: "#e7edf4",
          subtitle: "#c4d4e3",
          text: "#afc2d4",
          span: "#7b96b2",
          label: "#3a536b",
          border: "#1c2f41",
          post: "#112131",
          profile: "#0b1b2b",
          background: "#071422",
          input: "#040f1a",
        },
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
}
