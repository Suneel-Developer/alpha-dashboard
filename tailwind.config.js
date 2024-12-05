/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gray-50": "#FDFDFF",
        "gray-100": "#F9FAFF",
        "gray-200": "#DBE2E9",
        "gray-400": "#86939D",
        "heading-text": "#1E2D45",
        "normal-text": "#4B5564",
        "blue-normal": "#1E55A8",
        "blue-light": "#ECF2F3",
        "text-color-1": "#2D3643",
        "text-color-3": "#6D7A8D",
        "dark-text": "#1C222C",
        "success": "#1E9A49",
        "error": "#D62334",
        "warning": "#FFA51F",
      },
      boxShadow: {
        "input-shadow": "0px 1px 2px 0px #1018280D",
        "btn-shadow": "0px 1.33px 2.67px 0px #1018280D",
        "boxshadow": "0px 0px 33px 0px #1E55A81F",
        "boxshadowtwo": "0px 0px 38px 0px #1E55A814",
        "boxshadowthree": "0px 0px 33px 0px #11577117",
        "boxshadowfour": "0px 0px 29px 0px #00000014",
        "popup": "0px 4px 16px 0px #1E55A81A",
      },
      screens: {
        "xlg": "1300px",
        "xxlg": "1140px",
        "xsm": "500px"
      }
    },
  },
  plugins: [],
}