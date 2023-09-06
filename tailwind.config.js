/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      saturate: {
        25: '.25'
      }
    },
  },
  plugins: [],
}

// {
//   mytheme: {
//     primary: '#4DA5CB',
//     secondary: 'hover:bg-[#FFD059]',
//     accent: '#FF7959',
//     neutral: '#A6D9EF',
//     'base-100': '#A6D9EF',`
//     // 'tree-background': '#22303C',
//     info: '#73BEDE',
//     success: '#36d399',
//     warning: '#FFB909',
//     error: '#f87272',
//   },