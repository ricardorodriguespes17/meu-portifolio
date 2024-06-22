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
        'primary': {
          DEFAULT: '#380f00',
          100: '#66311a',
          200: '#5c2c18',
          300: '#522615',
          400: '#482113',
          500: '#3e1b10',
          600: '#34150e',
          700: '#2a100b',
          800: '#200a09',
          900: '#160406',
        },
        'cream': {
          100: '#ffffc6',
          200: '#ffffb8',
          300: '#ffffa9',
          400: '#ffff9a',
          500: '#ffff8b',
          600: '#ffff7c',
          700: '#ffff6d',
          800: '#ffff5e',
          900: '#ffff4f',
        },
        'white': '#fff',
        'black': '#0e0000',
        'accent': '#CC5500',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;
