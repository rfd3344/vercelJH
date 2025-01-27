import type { Config } from 'tailwindcss';
// import flowbite from 'flowbite-react/tailwind';

import { theme } from './src/core/tailwind/theme';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme,
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
};
export default config;
