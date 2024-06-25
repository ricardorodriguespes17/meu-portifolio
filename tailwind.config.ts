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
        'black': '#000',
        'accent': '#D13766',
      },
      backgroundImage: {
        'wallpapper': "url('/img/background.jpg')",
      },
      dropShadow: {
        'sm': '0 0 2px rgba(255,255,255, 0.5)',
        'md': '0 0 4px rgba(255,255,255, 0.5)',
        'lg': '0 0 6px rgba(255,255,255, 0.5)',
        'xl': '0 0 8px rgba(255,255,255, 0.5)',
        '2xl': '0 0 10px rgba(255,255,255, 0.5)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;
