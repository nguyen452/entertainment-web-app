/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      darkBlue: '#161D2F',
      darkerBlue: '#10141E',
      transparentDarkerBlue: 'rgba(16, 20, 30, 0.7)',
      transparentWhite: 'rgba(255, 255, 255, 0.3)'
     
    },
    extend: {
      height: {
        "30px" : "30px",
        "48px" : "48px",
        '960px': '960px',
        "200px": "200px",
        "230px": "230px",
        "300px": "300px",
      },
      width: {
        "117px": "117px",
        "470px": "470px",
        "1200px": "1200px",
        "1440px": "1440px"
      },
      spacing: {
        "168px": "168px",
        "400px": "400px"
      },
      borderRadius: {
        '20px': '20px'
      },
      fontSize: {
        "32px": "32px"
      },
    },
  },
  plugins: [],
}

