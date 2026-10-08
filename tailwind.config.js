module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F63E7B",
          secondary: "#20B2AA",
          accent: "#fff8f5",
          neutral: "#C6FFE0",
          "base-100": "#ffffff",
          "second-line-bg": "#F5F6FA",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
