export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      theme: {
        backgroundColor: theme => ({
         ...theme('colors'),
         'prime': '#f5f5ee',
         'secondary': '#ffed4a',
         'danger': '#e3342f',
        })
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
};