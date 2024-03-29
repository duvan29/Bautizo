/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      ms: '200px',
      md: '600px',
    },
    extend: {
      backgroundImage: {
        'Bg': "url('/public/istockphoto-1085611376-170667a.jpg')",
      },
    },
  },
  plugins: [],
}
