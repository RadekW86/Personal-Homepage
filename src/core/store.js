import { configureStore } from "@reduxjs/toolkit";
import homepageReducers from "../features/Homepage/homepageSlice";
import reposReducers from "../features/Homepage/reposSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    homepage: homepageReducers,
    portfolio: reposReducers,
  },
  middleware: [sagaMiddleware],
});

export default store;

sagaMiddleware.run(rootSaga);
