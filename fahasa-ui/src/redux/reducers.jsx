import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authSlice from "./auth/slice";
import cartSlice from "./cart/slice";
import categorySlice from "./category/slice";
const authPersistConfig = {
  key: "auth",
  storage,
};
const catePersistConfig = {
  key: "cate",
  storage,
};
const cartPersistConfig = {
  key: "cart",
  storage,
};
export const reducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  cate: persistReducer(catePersistConfig, categorySlice),
  cart: persistReducer(cartPersistConfig, cartSlice),
  // Add other reducers here
});
