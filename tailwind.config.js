/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      jp: ['Noto Sans JP', 'Noto Sans', 'sans-serif'],
    },
    colors: {
      "primary": "#cfbcff",
      "on-primary": "#381e72",
      "primary-container": "#4f378a",
      "on-primary-container": "#e9ddff",
      "secondary": "#cbc2db",
      "on-secondary": "#332d41",
      "secondary-container": "#4a4458",
      "on-secondary-container": "#e8def8",
      "tertiary": "#efb8c8",
      "on-tertiary": "#4a2532",
      "tertiary-container": "#633b48",
      "on-tertiary-container": "#633b48",
      "error": "#ffb4ab",
      "error-container": "#93000a",
      "on-error": "#690005",
      "on-error-container": "#ffdad6",
      "highlight": "#b1c5ff",
      "on-highlight": "#002c71",
      "highlight-container": "#1c438f",
      "on-highlight-container": "#dae2ff",
      "background": "#1c1b1e",
      "on-background": "#e6e1e6",
      "surface": "#1c1b1e",
      "on-surface": "#e6e1e6",
      "surface-variant": "#49454e",
      "on-surface-variant": "#cac4cf",
      "outline": "#948f99",
      "inverse-on-surface": "#1c1b1e",
      "inverse-surface": "#e6e1e6",
      "inverse-primary": "#6750a4",
      "shadow": "#000000",
      "surface-tint": "#cfbcff",
      "outline-variant": "#49454e",
      "scrim": "#000000",
    },
    extend: {
      gridTemplateColumns: {
        'shrink-left': 'auto minmax(0, 1fr)',
      }
    },
  },
  plugins: [],
}

