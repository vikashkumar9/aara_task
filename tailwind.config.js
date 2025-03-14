/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 3px 7px rgba(0, 0, 0, 0.16)", // Correct syntax
      },
      borderRadius: {
        border_custom: "6px 6px 0px 0px",
        // Custom border-radius definition
      },
      colors: {
        theme_color: "#FF5722",
        red_color: "#D9185F",
        google_color: "#4285F4",
        facebook_color: "#1877F2",
        Validation_color: "#EE2D6E",
      },
    },
  },
  plugins: [],
};
