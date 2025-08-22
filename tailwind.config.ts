import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx,mdx}',
    './pages/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#059669', // emerald
          dark: '#047857',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;