import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authSlice from "./auth/slice";
import categorySlice from "./category/slice";
const authPersistConfig = {
  key: "auth",
  storage,
};
const catePersistConfig = {
  key: "cate",
  storage,
};
export const reducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
  cate: persistReducer(catePersistConfig, categorySlice),
  // Add other reducers here
});
