module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "350px",
      // => @media (min-width: 640px) { ... }

      desktop: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
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
          300: "hsl(236, 45%, 20%)",
          500: "hsl(235, 45%, 61%)",
          700: "hsl(236, 100%, 87%)",
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
