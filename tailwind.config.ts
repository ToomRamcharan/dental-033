import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./pages/**/*{js,ts,jsx,tsx,mdx}', './components/**/*{js,ts,jsx,tsx,mdx}', './app/**/*{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { primary: { DEFAULT: '#0a1628', rgb: '10,22,40' }, accent: { DEFAULT: '#c5a047', rgb: '197,160,71' } }, fontFamily: { heading: ['Playfair Display', 'serif'], body: ['Inter', 'sans-serif'] } } },
  plugins: [],
};
export default config;