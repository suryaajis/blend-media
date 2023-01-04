import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import apiService from "./apiCalls"
import userReducer from "./userSlice";
import productReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: true,
    serializableCheck: false,
  }).concat(logger),
});
