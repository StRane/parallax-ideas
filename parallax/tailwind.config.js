module.exports = {
  content: ["./index.html", "./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "capa-m": "url('./images/capa-m.jpg')",
      }),
      blur: {
        xs: "1px",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)", opacity: "0" },
          "20%": { transform: "rotate(-8deg)", opacity: "0" },
          "30%": { transform: "rotate(14deg)", opacity: "0" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        waving: "wave 2s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
