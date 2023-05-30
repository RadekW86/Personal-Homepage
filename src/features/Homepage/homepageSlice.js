import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
  name: "homepage",

  initialState: {
    themeMode: "lightMode",
  },

  reducers: {
    toggleMode: (state) => {
      state.themeMode = state.themeMode === "lightMode" ? "darkMode" : "lightMode";
    },
  },
});

export const { toggleMode } = homepageSlice.actions;

export const selectHomepage = (state) => state.homepage;
export const selectThemeMode = state => selectHomepage(state).themeMode;

export default homepageSlice.reducer;
