/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  daisyui: {
    themes: [
      {
        mytheme: {
          primary:"#0066CC",
          neutral: "#2a323c",
          
 "base-100": "#FFFFFF"
        },
      },
    ],
  },
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    extend: {},
  },
  plugins: [require("daisyui")],
}

