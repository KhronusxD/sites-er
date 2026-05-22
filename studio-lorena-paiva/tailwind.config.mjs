/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bone: {
          50: '#FDFBF7',
          100: '#FBF8F4',
          200: '#F4EEE5',
          300: '#E8DECF',
        },
        blush: {
          100: '#F7E8E5',
          200: '#EFD3CE',
          300: '#E2B5AD',
          400: '#C99089',
          500: '#A86A62',
        },
        gold: {
          400: '#D4B978',
          500: '#C9A95B',
          600: '#A88A3F',
        },
        ink: {
          900: '#2B2622',
          700: '#4A413C',
          500: '#7A6F68',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightish: '-0.015em',
        widerish: '0.08em',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(43,38,34,0.04), 0 8px 24px -12px rgba(43,38,34,0.10)',
      },
    },
  },
  plugins: [],
};
