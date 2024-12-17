/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./sanity/**/*.{js,ts,jsx,tsx,mdx}", // Additional content folder
    ],
    theme: {
      extend: {
        screens: {
          xs: "475px", // Small screen breakpoint
        },
        colors: {
          primary: {
            "100": "#FFE8F0",
            DEFAULT: "#EE2B69",
          },
          secondary: "#FBE843",
          black: {
            "100": "#333333",
            "200": "#141413",
            "300": "#7D8087",
            DEFAULT: "#000000",
          },
          white: {
            "100": "#F7F7F7",
            DEFAULT: "#FFFFFF",
          },
          background: "var(--background)",
          foreground: "var(--foreground)",
        },
        fontFamily: {
          "work-sans": ['"Work Sans"', "sans-serif"],
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        boxShadow: {
          100: "2px 2px 0px 0px rgb(0, 0, 0)",
          200: "2px 2px 0px 2px rgb(0, 0, 0)",
          300: "2px 2px 0px 2px rgb(238, 43, 105)",
        },
      },
    },
    plugins: [
      require("tailwindcss-animate"),
      require("@tailwindcss/typography"),
    ],
  };
  