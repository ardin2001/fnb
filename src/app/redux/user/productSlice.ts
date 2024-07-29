import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addItem: (state: any, action: any) => {
      state.items.push(action.payload);
    },
    removeItem: (state: any, action: any) => {
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload
      );
    },
    updateItem: (state: any, action: any) => {
      const index = state.items.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

const actions = itemsSlice.actions;
const reducerProduct = itemsSlice.reducer;

export { actions, reducerProduct };
