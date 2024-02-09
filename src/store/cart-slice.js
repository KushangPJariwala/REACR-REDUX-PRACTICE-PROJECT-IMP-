import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, changed: false },
  reducers: {
    addItem(state, action) {
      state.changed = !state.changed;
      const newItem = action.payload.item;

      const existingItem = state?.items?.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },

    removeItem(state, action) {
      state.changed = !state.changed;
      const removableItem = action.payload.item;

      state.totalQuantity--;
      if (removableItem.quantity === 1) {
        const updatedItems = state.items.filter(
          (item) => item.id !== action.payload.item.id
        );
        state.items = updatedItems;
      } else {
        const existingItem = state.items.find(
          (item) => item.id === removableItem.id
        );
        existingItem.quantity--;
        existingItem.totalPrice -= removableItem.price;
      }
    },
    setItems(state, action) {
      const data = action.payload.data;
      console.log("data", data);
      state.items = data?.items || [];
      state.totalQuantity = data.totalQuantity || 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
