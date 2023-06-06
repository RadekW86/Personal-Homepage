import { configureStore } from "@reduxjs/toolkit";
import homepageReducers from "../features/Homepage/homepageSlice";
import reposReducers from "../features/Homepage/reposSlice";

const store = configureStore({
  reducer: {
    homepage: homepageReducers,
    portfolio: reposReducers,
  },
});

export default store;
