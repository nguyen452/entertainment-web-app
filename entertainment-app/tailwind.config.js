/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {

    extend: {
      colors: {
        darkBlue: '#161D2F',
        darkerBlue: '#10141E',
        transparentDarkerBlue: 'rgba(16, 20, 30, 0.7)',
        transparentWhite: 'rgba(255, 255, 255, 0.3)',
        semiTransparentWhite:'rgba(255, 255, 255, 0.75)',

      },
      height: {
        "30px" : "30px",
        "48px" : "48px",
        '960px': '960px',
        "200px": "200px",
        "230px": "230px",
        "280px": "280px",
        "300px": "300px",
      },
      width: {
        "117px": "117px",
        "470px": "470px",
        "1200px": "1200px",
        "1240px": "1240px",
        "1440px": "1440px"
      },
      maxWidth: {
        "280px": "280px"
      },
      spacing: {
        "145px": "145px",
        "280px": "280px",
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
