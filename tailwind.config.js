module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryblue: "hsl(246, 80%, 60%)",
        lightredwork: "hsl(15, 100%, 70%)",
        softblue: " hsl(195, 74%, 62%)",
        lightredstudy: "hsl(348, 100%, 68%)",
        limegreenexercise: "hsl(145, 58%, 55%)",
        violetsocial: "hsl(264, 64%, 52%)",
        softorangeselfcare: "hsl(43, 84%, 65%)",

        neutralblue: {
          100: "hsl(226, 43%, 10%)",
          400: "hsl(235, 45%, 61%)",
          600: "hsl(236, 100%, 87%)",
          900: "hsl(236, 100%, 87%)",
        },
      },

      fontFamily: {
        main: ["Rubik", "sans-serif"],
      },
    },
    plugins: [],
  },
};
