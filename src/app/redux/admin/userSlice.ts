import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getUser: any = createAsyncThunk(
  "data/fetchUser",
  async (inputUser: any, thunkAPI) => {
    try {
      const res = await fetch(
        "/api/users?page=" +
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
      const { data, status } = await res.json();
      return { data, status };
    } catch (e) {
      return { data: null, status: false };
    }
  }
);

const postUser: any = createAsyncThunk(
  "data/postUser",
  async (inputUser: any, thunkAPI) => {
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputUser),
      });
      const { status, statusCode, data } = await res.json();
      if (status) {
        try {
          const res = await fetch("/api/users?name=" + inputUser.fullname);
          const { status, statusCode, data } = await res.json();
          return { status, statusCode, data };
        } catch (e) {
          return { status: false, statusCode: 401, data: null };
        }
      } else {
        return { status, statusCode, data };
      }
    } catch (e) {
      return { status: false, statusCode: 401, data: null };
    }
  }
);

const updateUser: any = createAsyncThunk(
  "data/updateUser",
  async (inputUser: any, thunkAPI) => {
    try {
      const res = await fetch("/api/users/" + inputUser.id, {
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

const deleteUser: any = createAsyncThunk(
  "data/deleteUser",
  async (inputUser: any, thunkAPI) => {
    try {
      const res = await fetch("/api/users/" + inputUser.id, {
        method: "DELETE",
      });
      const { status } = await res.json();
      if (status) {
        try {
          const res = await fetch("/api/users?order=created_at&sort=desc");
          const { data } = await res.json();
          return { status: true, statusCode: 200, data };
        } catch (e) {
          return { status: false, statusCode: 401, data: null };
        }
      } else {
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
  name: "users",
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
      .addCase(getUser.pending, () => {
        return { status: null, data: null };
      })
      .addCase(getUser.fulfilled, (state, action: any) => {
        return action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        return { status: false, data: null };
      });

    builder
      .addCase(postUser.fulfilled, (state, action) => {
        let newState;
        if (action.payload.statusCode === 200) {
          newState = [...action.payload.data, ...state.data].slice(0, 10);
          return {
            ...state,
            status: action.payload.status,
            data: newState,
            statusCode: action.payload.statusCode,
            message: "Successfully created user data!",
          };
        } else if (action.payload.statusCode === 409) {
          return {
            ...state,
            status: true,
            statusCode: action.payload.statusCode,
            message: "Failed add user data!",
          };
        }
      })
      .addCase(postUser.rejected, (state, action) => {
        return action.payload;
      });

    builder
      .addCase(updateUser.fulfilled, (state, action) => {
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
          message: "Successfully updated user data!",
        };
      })
      .addCase(updateUser.rejected, () => {
        return { status: false, data: null };
      });

    builder
      .addCase(deleteUser.fulfilled, (state, action) => {
        return {
          ...state,
          status: true,
          data: action.payload.data,
          statusCode: action.payload.statusCode,
          message: "Successfully deleted user data!",
        };
      })
      .addCase(deleteUser.rejected, () => {
        return { status: false, data: null };
      });
  },
});

const actions = itemsSlice.actions;
const reducerUser = itemsSlice.reducer;

export { reducerUser, actions, getUser, postUser, deleteUser, updateUser };
