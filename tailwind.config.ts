import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-pattern': "url('./assets/pattern.png')",
      },
      colors: {
        'dark': "#0C0C0C",
        'light': "#FFFFFF",
        'web-blue': "#003D98",
        'web-green': "#4AC759"
      },
    },
  },
  plugins: [],
};
export default config;
