const customColor = {
  grayscale: {
    1: "#EBEBEB",
    2: "#D6D6D6",
    3: "#C2C2C2",
    4: "#ADADAD",
    5: "#999999",
    6: "#858585",
    7: "#707070",
    8: "#5C5C5C",
    9: "#474747",
  },
  primary: {
    1: "#DCEEFF",
    2: "#B9DEFF",
    3: "#95CDFE",
    4: "#72BDFE",
    5: "#4FACFE",
    6: "#3F8ACB",
    7: "#2F6798",
    8: "#204566",
    9: "#102233",
  },
};

module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: customColor,
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              color: theme("colors.grayscale.8"),
            },
          ],
        },
      }),
    },
    fontFamily: {
      inter:
        'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
