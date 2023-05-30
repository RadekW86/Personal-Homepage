import { configureStore } from "@reduxjs/toolkit";
import homepageReducers from "../features/Homepage/homepageSlice";

const store = configureStore({
  reducer: {
    homepage: homepageReducers,
  },
});

export default store;
