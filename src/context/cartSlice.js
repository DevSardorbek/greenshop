import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("carts")) || [],
  },
  reducers: {
    addToCart(state, action) {
      let index = state.value.findIndex((el) => el?.id === action?.payload?.id);
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      }
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
    incrementCartQuantity(state, action) {
      const index = state.value.findIndex((el) => el.id === action.payload.id);
      state.value = state.value.map((item, inx) => {
        return index === inx ? { ...item, quantity: item.quantity + 1 } : item;
      });
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
    decrementCartQuantity(state, action) {
      const index = state.value.findIndex((el) => el.id === action.payload.id);
      state.value = state.value.map((item, inx) => {
        return index == inx ? { ...item, quantity: item.quantity - 1 } : item;
      });
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
    removeItemFromCart(state, action) {
      state.value = state.value.filter((el) => el.id != action.payload.id);
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
  },
});
export const {
  addToCart,
  incrementCartQuantity,
  decrementCartQuantity,
  removeItemFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
