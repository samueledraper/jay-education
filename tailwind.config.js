/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
      colors: {
        brandNeutral: {
          100: "#F0FAFF",
          200: "#E3F6FF",
        },
        brandTeal: {
          500: "#00D2E1",
          600: "#00C5D3",
          700: "#008A94",
          800: "#007E85",
          900: "#003C3C",
        },
      },
    },
  },
  plugins: [],
};
