import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FAF5EC",
        ink: "#231B14",
        terracotta: "#C6693E",
        clay: "#A8532E",
        sage: "#7D8C6E",
        teal: {
          DEFAULT: "#3C7A78",
          light: "#DCEAE7",
        },
        sand: "#EFE4D2",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
