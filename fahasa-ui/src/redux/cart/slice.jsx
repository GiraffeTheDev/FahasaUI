import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      console.log(action.payload);
      const newItem = action.payload;
      const existItem = state.items.find((item) => item.id === newItem.id);
      if (existItem) {
        existItem.totalQuantity += newItem.quantity;
        existItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          discount: newItem.discount,
          image: newItem.image,
          quantity: newItem.quantity,
        });
      }
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    increaseItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index >= 0) {
        state.items[index].quantity += 1;
      }
    },
    decreaseItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(index);
      if (index >= 0 && state.items[index].quantity > 1) {
        state.items[index].quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeItemFromCart, increaseItem, decreaseItem } =
  cartSlice.actions;
export default cartSlice.reducer;
