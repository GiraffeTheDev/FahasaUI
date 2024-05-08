import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authSlice from "./auth/slice";

const authPersistConfig = {
  key: "auth",
  storage,
};

export const reducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),

  // Add other reducers here
});
