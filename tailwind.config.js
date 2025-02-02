/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '310': '310px', // Custom breakpoint for 310px
        '450': '450px', // Custom breakpoint for 450px
        '800': '800px', // Custom breakpoint for 800px
        '1000': '1000px', // Custom breakpoint for 1000px
        '1480': '1480px', // Custom breakpoint for 1480px
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.sidebar ul li': {
          '@apply flex justify-center items-start cursor-pointer hover:bg-[#e7e9ea1a] hover:border-none hover:rounded-full py-2 pl-2 pr-7': {},
        },

        '.sidebar ul li span': {
          '@apply text-xl font-bold ml-[15px]': {},
        },

        '.footer ul li': {
          '@apply text-[13px] text-[rgb(113,118,123)]': {},
        },

        '.footer ul li a': {
          '@apply cursor-pointer hover:underline': {},
        },      
      });
    },
  ],
};