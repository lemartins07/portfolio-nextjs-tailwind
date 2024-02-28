import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primaryColor: '#64DAFB',
      gray1: '#010607',
      gray2: '#1a1a1a',
      gray3: '#20232A',
      gray4: '#282C34',
      gray5: '#6D6D6D',
      gray6: '#aaa',
      white: '#ffffff',
    },
    boxShadow: {
      default: '0 .5rem 1rem rgba(0,0,0,.7)',
    },
  },
  plugins: [],
}
export default config
