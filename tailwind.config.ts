import tailwindTypography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      "sm-mobile": { max: "766px" },
      mobile: "767px",
      tablet: "990px",
      laptop: "1200px",
      desktop: "1600px",
    },
    extend: {
      fontSize: {
        sm: "var(--font-size)",
        md: "calc(var(--font-size) + 4px)",
        lg: "calc(var(--font-size) + 8px)",
        xs: "calc(var(--font-size) - 4px)",
        xxs: "calc(var(--font-size) - 8px)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
    },
  },
  plugins: [tailwindcssAnimate, tailwindTypography],
} satisfies Config;
