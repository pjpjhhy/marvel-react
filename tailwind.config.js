/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "special-font" : 'Moirai One', 
        "special2": "Diphylleia"
      }, 
      colors: {
        "main-dark" : "#202020"
      },
      keyframes:{
        scared:{
          "0%,100%":{transfor:"scale(1)"},
          "50%":{transform: "scale(1.04)"}
        },
        glitch: {
          "0%": {
            backgroundPosition: "50%, 50%, 50%",
            transform: "translate(0, 0)",
          },
          "25%": {
            backgroundPosition: "50% -5px 2px,",
            transform: "translate(-5px, 5px)",
          },
          "50%": {
            backgroundPosition: "50% 2px 6px, ",
            transform: "translate(7px, -7px)",
          },
          "75%": {
            backgroundPosition: "50% -2px 4px, ",
            transform: "translate(-5px, 5px)",
          },
          "100%": {
            backgroundPosition: "50% 3px 7px, ",
            transform: "translate(0, 0)",
          }
        },
        glitch2: {
          "0%": {
            backgroundPosition: "50%, 50%, 50%",
            transform: "translate(0, 0)",
          },
          "25%": {
            backgroundPosition: "50% 0px 2px, ",
            transform: "translate(-1px, 1px)",
          },
          "50%": {
            backgroundPosition: "50% 0px 6px,",
            transform: "translate(3px, -3px)",
          },
          "75%": {
            backgroundPosition: "50% 0px 4px, ",
            transform: "translate(-1px, 1px)",
          },
          "100%": {
            backgroundPosition: "50% 0px 7px, ",
            transform: "translate(0, 0)",
          }
        }
      },
      animation:{
        scared:"scared 2s ease-in-out infinity",
        glitch: "glitch 1s linear infinite",
        glitch2: "glitch 0.9s linear infinite",
      }
    },
  },
  plugins: [],
}

