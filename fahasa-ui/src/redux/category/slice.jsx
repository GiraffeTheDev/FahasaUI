import { createSlice } from "@reduxjs/toolkit";
import { handleCreateCategory, handleGetAllCategory } from "./handlers";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: null,
    loading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleCreateCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(handleCreateCategory.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(handleGetAllCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(handleGetAllCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.category = action.payload.data;
      });
  },
});
export default categorySlice.reducer;
