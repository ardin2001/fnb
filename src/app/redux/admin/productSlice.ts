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
      const { status, data } = await res.json();
      return { status, data };
    } catch (e) {
      return { data: null, status: false };
    }
  }
);

const postProduct: any = createAsyncThunk(
  "data/postProduct",
  async (inputUser: any, thunkAPI) => {
    inputUser.sold = 450;
    inputUser.rating = 4.1;
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputUser),
      });
      const { status, statusCode, data } = await res.json();
      if (status) {
        try {
          const res = await fetch("/api/products?name=" + inputUser.name);
          const { status, statusCode, data } = await res.json();
          return { status, statusCode, data };
        } catch (e) {
          return { status: false, statusCode: 401, data: null };
        }
      }else {
        return { status, statusCode, data };
      }
    } catch (e) {
      return { status: false, statusCode: 401, data: null };
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
        return { status: true, statusCode: 200, data: inputUser };
      } else {
        return { status: false, statusCode: 409, data: inputUser };
      }
    } catch (e) {
      return { status: false, statusCode: 401, data: null };
    }
  }
);

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
          return { status: true, statusCode: 200, data };
        } catch (e) {
          return { status: false, statusCode: 401, data: null };
        }
      }else {
        return { status: false, statusCode: 409, data: null };
      }
    } catch (e) {
      return { status: false, statusCode: 401, data: null };
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
    setClearStatusCode(state: any) {
      return {
        ...state,
        statusCode: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, () => {
        return { status: null, data: null };
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getProduct.rejected, (state) => {
        return { status: false, data: null };
      });

    builder
    .addCase(postProduct.fulfilled, (state, action) => {
      let newState;
      if (action.payload.statusCode === 200) {
        newState = [...action.payload.data, ...state.data].slice(0, 10);
        return {
          ...state,
          status: action.payload.status,
          data: newState,
          statusCode: action.payload.statusCode,
          message: "Successfully created product data!",
        };
      } else if (action.payload.statusCode === 409) {
        return {
          ...state,
          status: true,
          statusCode: action.payload.statusCode,
          message: "Failed add product data!",
        };
      }
    })
    .addCase(postProduct.rejected, (state, action) => {
      return action.payload;
    });

    builder
    .addCase(updateProduct.fulfilled, (state, action) => {
      const newData = state.data.map((item: any) => {
        if (item.id === action.payload.data.id) {
          return { ...item, ...action.payload.data };
        }
        return item;
      });
      return {
        ...state,
        status: true,
        data: newData,
        statusCode: action.payload.statusCode,
        message: "Successfully updated product data!",
      };
    })
    .addCase(updateProduct.rejected, () => {
      return { status: false, data: null };
    });

    builder
    .addCase(deleteProduct.fulfilled, (state, action) => {
      return {
        ...state,
        status: true,
        data: action.payload.data,
        statusCode: action.payload.statusCode,
        message: "Successfully deleted product data!",
      };
    })
    .addCase(deleteProduct.rejected, () => {
      return { status: false, data: null };
    });
  },
});

const actions = itemsSlice.actions;
const reducerProduct = itemsSlice.reducer;

export {
  reducerProduct,
  actions,
  getProduct,
  postProduct,
  deleteProduct,
  updateProduct,
};
