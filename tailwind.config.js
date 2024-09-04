/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide_down: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fade_in_cart: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fade_out_cart: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        }

      },
      
      animation: {
        slide_down: 'slide_down 0.3s ease-in-out ',
        fade_in_cart : 'fade_in_cart 0.3s ease-in-out',
        fade_out_cart : 'fade_in_cart 0.3s ease-in-out',
      },
      colors: {
        'dark-blue': '#27293b',
        'custom-gray': 'rgba(0, 0, 0, 0.5)',
       
      },
    },
  },
 
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.position-unset': {
          position: 'unset',
        },
      }

      addUtilities(newUtilities, ['responsive'])
    },
  ],
}

