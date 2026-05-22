/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bone: {
          50: '#FCFAF6',
          100: '#F8F5EE',
          200: '#EFEADB',
          300: '#E1D9C2',
        },
        sage: {
          200: '#D7E1D2',
          300: '#B8C8B1',
          400: '#92A98A',
          500: '#6E8867',
          600: '#4F6A4A',
        },
        navy: {
          400: '#3D5B72',
          500: '#234055',
          600: '#172E40',
          700: '#0F2231',
          800: '#0A1923',
          900: '#06111A',
        },
        slate: {
          400: '#6B7785',
          500: '#4E5763',
          600: '#384049',
          700: '#262D35',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightish: '-0.02em',
        tighter: '-0.04em',
        widerish: '0.08em',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,34,49,0.04), 0 8px 24px -12px rgba(15,34,49,0.10)',
        ring: '0 0 0 1px rgba(15,34,49,0.06), 0 18px 48px -22px rgba(15,34,49,0.18)',
      },
    },
  },
  plugins: [],
};
