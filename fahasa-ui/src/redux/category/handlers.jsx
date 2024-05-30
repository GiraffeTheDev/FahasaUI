import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { create, getAll } from "../../api/category";
export const handleCreateCategory = createAsyncThunk(
  "createCategory",
  async (value) => {
    console.log("cate in redux", value);
    const response = await create(value);
    if (response) {
      toast(response.data.message);
    }
    return response.data;
  }
);
export const handleGetAllCategory = createAsyncThunk(
  "getAllCategory",
  async (value) => {
    const response = await getAll(value);
    console.log("resss", response);
    if (response.data.data) {
      toast(response.data.message);
    }
    return response.data;
  }
);
