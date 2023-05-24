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
  mineShaft2: "#363636", //BG dakrmode
  semiDark: "rgba(54, 54, 54, 0.72)",
  iron: "#d1d5da",
  semiGrey: "rgba(209, 213, 218, 0.1)",
};

export const theme = {
  boxShadow:
    "0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03)",

  breakPoints: {
    phoneMax: "750px",
  },

  lightMode: {
    backgroundColor: colors.whiteLilac,
  },

  darkMode: {
    backgroundColor: colors.mineShaft2,
  },
};
