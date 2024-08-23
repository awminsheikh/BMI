/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        moveUp: {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-15%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        element: {
          '0%': { transform: 'translateY(5%)' },
          '50%': { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(5%)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        moveUp: 'moveUp 5s infinite forwards ease-out',
        element: 'element 5s infinite forwards ease-in-out'
      },
    },
  },
  plugins: [],
};
