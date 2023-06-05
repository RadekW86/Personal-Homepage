const colors = {
  mineShaft: "#252525", //black text
  slateGray: "#6E7E91", //text secondary
  white: "#FFFFFF", //white
  whiteLilac: "#FBFBFE", //BG light mode
  scienceBlue: "#0366D6", //Main blue LM
  anakiwa: "#8CC2FF",
  mercury: "#E5E5E5", //Light grey
  dodgerBlue: "#2188FF", //Main blue DM
  shipCove: "#6D93BE",
  semiDark: "rgba(54, 54, 54, 0.72)", //BG dakrmode
  iron: "#d1d5da",
  semiGrey: "rgba(209, 213, 218, 0.1)",
  cornflowerBlue: "rgba(209, 213, 218, 0.3)", //button border
  cornflowerBlue02: "rgba(3, 102, 214, 0.2)",
  cornflowerBlue05: "rgba(3, 102, 214, 0.5)",
};

export const theme = {
  boxShadow:
    "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",

  breakPoints: {
    phoneMax: "750px",
  },

  fontWeights: {
    light: "400",
    normal: "600",
    semiBold: "700",
    bold: "900",
  },

  lightMode: {
    backgroundColor: colors.whiteLilac,
    mainBlue: colors.scienceBlue,
    text: colors.mineShaft,
    textSecondary: colors.slateGray,
    buttonText: colors.white,
    buttonBorder: colors.cornflowerBlue,
    switch: colors.mercury,
    sun: colors.white,
    sectionBackground: colors.white,
    divider: colors.cornflowerBlue,
    tileBorderActive: colors.cornflowerBlue02,
    sunAllign: "flex-start",
    buttonShadowFocus:
      "2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF",
    buttonShadowActive: "inset 0px 2px 0px rgba(20, 70, 32, 0.2)",
  },

  darkMode: {
    backgroundColor: colors.mineShaft,
    mainBlue: colors.dodgerBlue,
    text: colors.white,
    textSecondary: colors.white,
    buttonText: colors.white,
    buttonBorder: colors.cornflowerBlue,
    switch: colors.semiDark,
    sun: colors.mineShaft,
    sectionBackground: colors.semiDark,
    divider: colors.cornflowerBlue,
    tileBorderActive: colors.cornflowerBlue05,
    sunAllign: "flex-end",
    buttonShadowFocus:
      "2px -2px 0px #6D93BE, -2px 2px 0px #6D93BE, 2px 2px 0px #6D93BE, -2px -2px 0px #6D93BE",
    buttonShadowActive: "inset 0px 2px 0px rgba(20, 70, 32, 0.2)",
  },
};
