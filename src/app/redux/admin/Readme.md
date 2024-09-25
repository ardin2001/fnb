## Reducer

```
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getProduct: any = createAsyncThunk(
  "data/fetchProduct",
  async (inputUser: any, thunkAPI) => {
    try {
      const res = await fetch(
        "/api/products?page=" +
          (inputUser.page || 1) +
          "&order=" +
          (inputUser.order || "") +
          "&sort=" +
          (inputUser.sort || "") +
          "&category=" +
          (inputUser.category || "") +
          "&name=" +
          (inputUser.inputName || "")
      );
      const { data } = await res.json();
      return data;
    } catch (e) {
      return null;
    }
  }
);

const postProduct: any = createAsyncThunk(
  "data/postProduct",
  async (inputUser: any, thunkAPI) => {
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputUser),
      });
      const { status } = await res.json();
      if (status) {
        try {
          const res = await fetch("/api/products?name=" + inputUser.name);
          const { data } = await res.json();
          return data;
        } catch (e) {
          return null;
        }
      }
    } catch (e) {
      return null;
    }
  }
);

const updateProduct: any = createAsyncThunk(
  "data/updateProduct",
  async (inputUser: any, thunkAPI) => {
    try {
      const res = await fetch("/api/products/" + inputUser.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputUser),
      });
      const { status } = await res.json();
      if (status) {
        return inputUser;
      }
    } catch (e) {
      return null;
    }
  }
)

const deleteProduct: any = createAsyncThunk(
  "data/deleteProduct",
  async (inputUser: any, thunkAPI) => {
    try {
      const res = await fetch("/api/products/" + inputUser.id, {
        method: "DELETE",
      });
      const { status } = await res.json();
      if (status) {
        try {
          const res = await fetch("/api/products?order=created_at&sort=desc");
          const { data } = await res.json();
          return data;
        } catch (e) {
          return null;
        }
      }
    } catch (e) {
      return null;
    }
  }
);

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
      .addCase(getProduct.pending, () => {
        return { status: null, data: null };
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        return { status: true, data: action.payload };
      })
      .addCase(getProduct.rejected, (state) => {
        return { status: false, data: null };
      });

    builder
      .addCase(postProduct.fulfilled, (state, action) => {
        const newState = [...action.payload, ...state.data].slice(0, 10);
        return { ...state, status: true, data: newState };
      })
      .addCase(postProduct.rejected, () => {
        return { status: false, data: null };
      });

    builder
      .addCase(deleteProduct.fulfilled, (state, action) => {
        return { status: true, data: action.payload };
      })
      .addCase(deleteProduct.rejected, () => {
        return { status: false, data: null };
      });

    builder
      .addCase(updateProduct.fulfilled, (state, action) => {
        const newData = state.data.map((item: any) => {
          if (item.id === action.payload.id) {
            return { ...item, ...action.payload };
          }
          return item;
        })
        return { status: true, data: newData };
      })
      .addCase(updateProduct.rejected, () => {
        return { status: false, data: null };
      });
  },
});

const actions = itemsSlice.actions;
const reducerProduct = itemsSlice.reducer;

export { actions, reducerProduct, getProduct, postProduct, deleteProduct, updateProduct };
```