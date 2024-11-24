/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dimgray: {
          "100": "#737373",
          "200": "#5c5454",
        },
        black: "#000",
        gray: {
          "100": "#949494",
          "200": "#1a1b1f",
          "300": "#0d0e10",
          "400": "#0a0a0a",
        },
        gainsboro: "#d8d8d8",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "open-sans": "'Open Sans'",
        lato: "Lato",
        "permanent-marker": "'Permanent Marker'",
      },
    },
    fontSize: {
      smi: "13px",
      sm: "14px",
      base: "16px",
      "17xl": "36px",
      "9xl": "28px",
      xs: "12px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      mq410: {
        raw: "screen and (max-width: 410px)",
      },
      mq356: {
        raw: "screen and (max-width: 356px)",
      },
      mq350small: {
        raw: "screen and (max-width: 350px)",
      },
      mq306: {
        raw: "screen and (max-width: 306px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
