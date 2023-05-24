import { configureStore } from "@reduxjs/toolkit";
import homepageReducers from "./homepageSlice";

const store = configureStore({
  reducer: {
    homepage: homepageReducers,
  },
});

export default store;
