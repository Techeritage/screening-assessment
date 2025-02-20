import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mlg: "1300px",
      },
      colors: {
        primary: {
          DEFAULT: "#002F6C",
          50: "#F8FBFF",
          100: "#E4F0FF",
          200: "#014DAF",
          300: "#001735",
          400: "#101828",
          500: "#F1F7FF",
        },
        myBlack: "#121212",
        myGray: {
          DEFAULT: "#DEDEDF",
          50: "#F2F4F7",
          100: "#D0D5DD",
          200: "#7E8B9C",
          300: "#D0D5DD",
          400: "#344054",
          500: "#E2E2E2",
        },
      },
      fontFamily: {
        sato: ["Satoshi-Regular", "sans-serif"],
        satoMd: ["Satoshi-Medium", "sans-serif"],
        satoBold: ["Satoshi-Bold", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
