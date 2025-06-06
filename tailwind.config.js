module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
      },
      colors: {
        green: "#296f5c",
        gold: "#fdc751",
        offwhite: "#fdf9ed",
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
