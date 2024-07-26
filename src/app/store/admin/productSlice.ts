import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "products",
  initialState : [],
  reducers: {
    setItems: (state: any, action: any) => {
      // state = action.payload;
      // state.push(action.payload);
      return state = action.payload;
    },
    addItem: (state: any, action: any) => {
      state.push(action.payload);
    },
    removeItem: (state: any, action: any) => {
      state = state.filter(
        (item: any) => item.id !== action.payload
      );
    },
    updateItem: (state: any, action: any) => {
      const index = state.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

const actions = itemsSlice.actions;
const reducerProduct = itemsSlice.reducer;

export { actions, reducerProduct };
