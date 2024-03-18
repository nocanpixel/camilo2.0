import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'nunito': ['Nunito', 'sans-serif'],
      'mono': ['Share Tech Mono', 'monospace']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'toolbar-color': '#202124',
        'close-color': '#FE5F57',
        'minimize-color': '#FEBC2E',
        'expand-color': '#28C840',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
export default config
