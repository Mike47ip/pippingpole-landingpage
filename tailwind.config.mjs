/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#05070D',   // near-black-blue base
          900: '#05070D',
          800: '#0A0F1C',
          700: '#0E1526',
          600: '#131C33',
        },
        blue: {
          650: '#12306B',
          600: '#1B4DBF',
          500: '#2B5CFF',       // primary electric blue
          400: '#5B82FF',
        },
        signal: {
          DEFAULT: '#FF7A3D',   // complementary warm amber-orange
          light: '#FFA36C',
        },
        cyan: {
          glow: '#5EEAD4',
        },
        paper: '#E8EDF7',       // off-white text on dark
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        blueprint:
          'linear-gradient(rgba(91,130,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(91,130,255,0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(43,92,255,0.25), 0 0 40px -8px rgba(43,92,255,0.45)',
      },
    },
  },
  plugins: [],
};
