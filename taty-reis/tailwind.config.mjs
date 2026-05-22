/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FCF8F1',
          100: '#F8F2E8',
          200: '#F0E5D2',
          300: '#E5D2B2',
        },
        honey: {
          200: '#F0D6A6',
          300: '#E0B36A',
          400: '#C99860',
          500: '#B8763E',
          600: '#A86B3F',
        },
        bronze: {
          300: '#C9A079',
          400: '#B8854A',
          500: '#9B6A38',
          600: '#7C5128',
        },
        coffee: {
          500: '#7A5640',
          600: '#5A3A28',
          700: '#3D2A1F',
          800: '#2A1D15',
          900: '#1B130D',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightish: '-0.018em',
        widerish: '0.08em',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(61,42,31,0.05), 0 8px 24px -12px rgba(61,42,31,0.14)',
        glow: '0 0 0 1px rgba(184,118,62,0.25), 0 12px 40px -16px rgba(184,118,62,0.45)',
      },
    },
  },
  plugins: [],
};
