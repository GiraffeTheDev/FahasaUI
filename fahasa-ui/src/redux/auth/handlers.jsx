import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { login, logout, register } from "../../api/auth";
export const handleRegister = createAsyncThunk(
  "registerAuth",
  async (value) => {
    const response = await register(value);
    if (!response.data.error) {
      Swal.fire({ title: response.data.message, icon: "success" });
    }
    return response.data;
  }
);
export const handleLoginRedux = createAsyncThunk("loginAuth", async (value) => {
  const response = await login(value);
  console.log(response);
  if (response.data.error) {
    toast.error(response.data.message);
  } else {
    Swal.fire({ title: response.data.message, icon: "success" });
  }
  return response.data;
});
export const handleLogout = createAsyncThunk("logoutAuth", async () => {
  const response = await logout();
  if (response) {
    toast.success(response.data.message);
  }
});
