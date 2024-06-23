import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#101728',
        'secondary': '#9340ff',
        'white': '#fff',
        'black': '#0C0C0D',
        'accent': '#D13766',
      },
      backgroundImage: {
        'wallpapper': "url('/img/background.jpg')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;
