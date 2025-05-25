import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}', // this is all you need for now
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        magenta: '#CA3CFF',
        blue: '#2C3EFA',
      },
    },
  },
  plugins: [],
};

export default config;