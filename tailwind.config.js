/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      rotate: {
        30: "30deg",
        60: "60deg",
      },
      colors: {
        brandNeutral: "#FFFFF0",
        brandDark: "#1D484E",
        brandLight: "#39C2D7",
        brandGreen: "#78A350",
        brandYellow: "#FFCC4E",
        brandPink: "#F287B7",
        brandOrange: "#F58345",
      },
      backgroundImage: {
        expression_01: "url('../assets/expressions/expression_01.png')",
        expression_02: "url('../assets/expressions/expression_02.png')",
        expression_03: "url('../assets/expressions/expression_03.png')",
        expression_04: "url('../assets/expressions/expression_04.png')",
        expression_05: "url('../assets/expressions/expression_05.png')",
        expression_06: "url('../assets/expressions/expression_06.png')",
        expression_07: "url('../assets/expressions/expression_07.png')",
        expression_08: "url('../assets/expressions/expression_08.png')",
        expression_09: "url('../assets/expressions/expression_09.png')",
        expression_10: "url('../assets/expressions/expression_10.png')",
        expression_11: "url('../assets/expressions/expression_11.png')",
        expression_12: "url('../assets/expressions/expression_12.png')",
        expression_13: "url('../assets/expressions/expression_13.png')",
        calendar_black: "url('../assets/illustrations/calendar_black.png')",
        calendar_white: "url('../assets/illustrations/calendar_white.png')",
      },
    },
  },
  plugins: [],
};
