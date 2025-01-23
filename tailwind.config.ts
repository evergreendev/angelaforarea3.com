import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-lato)'],
        header: ['var(--font-cooper)']
      },
      colors: {
        blue: {
          500: "#335CA9",
          600: "#0C55CF"
        },
        orange1: {
          500: "#ff5757"
        },
        orange2: {
          500: "#ff7d7d"
        },
        cream: {
          500: "#FBF6DE"
        }
      },
      backgroundImage: {
        "flag": "url('../public/american-flag.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
