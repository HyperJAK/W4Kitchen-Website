/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#55EF43',
        secondary: '#F06E30',
        accent: '#F5F4F4',
        page: '#FFFFFF',
        opposite: '#10101F',
      },
      backgroundImage: {
        space: 'url("/bg-explosion.jpeg")',
        site: 'url("/site-bg.svg")',
        sitePng: 'url("/svg-bg.png")',
        logo: 'url("/W4Kitchen.png")',
        recipeCategoriesImg: 'url("/recipeCategories.png")',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
        rubik: [`var(--font-rubik)`, 'sans-serif'],
        robotoSlab: [`var(--font-roboto-slab)`, 'sans-serif'],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [require('daisyui'), require('tailwind-scrollbar')],
}
