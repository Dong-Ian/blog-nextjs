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
      sm: "500px",
      md: "1200px",
      lg: "1550px",
    },
    extend: {
      fontSize: {
        sm: "14px",
        md: "18px",
        lg: "24px",
        xs: "12px",
        xxs: "10px",
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
