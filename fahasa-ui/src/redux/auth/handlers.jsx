import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { login, logout, register } from "../../api/auth";
export const handleRegister = createAsyncThunk(
  "registerAuth",
  async (value) => {
    const response = await register(value);
    if (response) {
      toast(response.data.message);
    }
    return response.data;
  }
);
export const handleLoginRedux = createAsyncThunk("loginAuth", async (value) => {
  const response = await login(value);
  console.log("resss", response);
  if (response.data.data) {
    toast(response.data.message);
  }
  return response.data;
});
export const handleLogout = createAsyncThunk("logoutAuth", async () => {
  const response = await logout();
  if (response) {
    toast(response.data.message);
  }
});
