import type { Config } from "tailwindcss";
import ThemeConfig from "./src/config/ThemeConfig";

const config: Config = {
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
        gradient:
          "linear-gradient(179.69deg, rgba(255, 255, 255, 0) -31.53%, #F54748 303.75%)",
        footer: `${ThemeConfig.layout.footer.backgroundColor}`,
      },
      height: {
        footer: `${ThemeConfig.layout.footer.height}px`,
      },
      dropShadow: {},
    },
  },
  plugins: [],
};
export default config;
