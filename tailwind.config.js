/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandNeutral: "#f0faff",
        brandLightTurquoise: "#00D2E1",
        brandMidTurquoise: "#007E85",
        brandDarkTurquoise: "#003C3C",
      },
    },
  },
  plugins: [],
};
