/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background_me: "hsla(220, 17%, 7%, 1)",
        banner_background_me: "hsla(250, 6%, 20%, 1)",
        white_alpha_20_me: "hsla(0, 0%, 100%, 0.2)",
        on_background_me: "hsla(220, 100%, 95%, 1)",
        on_surface_me: "hsla(250, 100%, 95%, 1)",
        on_surface_variant_me: "hsla(250, 1%, 44%, 1)",
        primary_me: "hsla(349, 100%, 43%, 1)",
        primary_variant_me: "hsla(349, 69%, 51%, 1)",
        rating_color_me: "hsla(44, 100%, 49%, 1)",
        surface_me: "hsla(250, 13%, 11%, 1)",
        text_color_me: "hsla(250, 2%, 59%, 1)",
        white_me: "hsla(0, 0%, 100%, 1)",
        banner_overlay_grad_me:
          "90deg, hsl(220, 17%, 7%) 0%, hsla(220, 17%, 7%, 0.5) 100%",
        bottom_overlay_grad_me:
          "180deg, hsla(250, 13%, 11%, 0), hsla(250, 13%, 11%, 1)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
