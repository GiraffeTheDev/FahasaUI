import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  create,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "../../api/category";
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
    const response = await getAllCategory(value);
    console.log("resss", response);
    if (response.data.data) {
      toast(response.data.message);
    }
    return response.data;
  }
);
export const handleUpdateCategory = createAsyncThunk(
  "updateCategory",
  async (value) => {
    const response = await updateCategory(value);
    if (response.data) {
      toast(response.data.message);
    }
    return response.data;
  }
);
export const handleDeleteCategory = createAsyncThunk(
  "deleteCate",
  async (value) => {
    const response = await deleteCategory(value);
    if (response.data) {
      toast(response.data.message);
    }
    return response.data;
  }
);
