module.exports = {
  content: ["./src/**/*.{html,ts}"],
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      'primary': "#1651e8",
      "primary-dark": "#1342b9",
      "primary-thm-dark": "#6969ff",
      
      'white': "#fefefe",

      'black': "#1b1b1b",
      "black-dark": "#000000",
      'black-thm-drk':'#252525',

      "gray-light": "#8c8e8f",
      "gray-light-1": "#e8e6e7",
      "gray-light-2": "#f1f2f8",
      "gray-dark": "#5e5e5e",
      "gray-700": "#383838",

      'red': "#fa1616",
      "red-light": "#e56565",

      'warning': "#f6c274",

    },
    extend: {
      /* Reset margins, paddings, and borders for all elements */
      margin: {
        reset: "0",
      },
      padding: {
        reset: "0",
      },
      borderWidth: {
        reset: "0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/typography"),
    // require("tailwindcss-children"),
  ],
};
