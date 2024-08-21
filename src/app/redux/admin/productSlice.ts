import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getProduct:any = createAsyncThunk("data/fetchProduct", async () => {
  const response = await fetch("/api/products");
  const { data } = await response.json();
  return data;
});

const initialState: any = [
  {
    status: null,
    data: [],
  },
];
const itemsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setItems: (state: any, action: any) => {
      // state = action.payload;
      // state.push(action.payload);
      // state = [...state, action.payload];
      return { ...state, data: action.payload };
    },
    addItem: (state: any, action: any) => {
      state.data.push(action.payload);
    },
    removeItem: (state: any, action: any) => {
      state = state.data.filter((item: any) => item.id !== action.payload);
    },
    updateItem: (state: any, action: any) => {
      const index = state.data.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        return { ...state, status: null, data: null };
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        return { ...state, status: true, data: action.payload };
      })
      .addCase(getProduct.rejected, (state) => {
        return { ...state, status: false, data: null };
      });
  },
});

const actions = itemsSlice.actions;
const reducerProduct = itemsSlice.reducer;

export { actions, reducerProduct, getProduct };
