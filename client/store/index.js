import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./userSlice";
import productReducer from "./productSlice";
import favoriteReducer from "./favoriteSlice";
import cartReducer from "./cartSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    favorite: favoriteReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: true,
    serializableCheck: false,
  }).concat(logger),
});
