import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";
import { loginUserThunk, registerUserThunk, updateUserThunk, clearStoreThunk } from "./userThunk";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
  isSidebarOpen: false,
};

export const registerUser = createAsyncThunk("user/register", async (user, thunkAPI) => {
  return registerUserThunk("/auth/register", user, thunkAPI);
});
export const loginUser = createAsyncThunk("user/login", async (user, thunkAPI) => {
  return loginUserThunk("/auth/login", user, thunkAPI);
});

export const updateUser = createAsyncThunk("auth/updateUser", async (user, thunkAPI) => {
  return updateUserThunk("/auth/updateUser", user, thunkAPI);
});

export const clearStore = createAsyncThunk("user/clearStore", async (message, thunkAPI) => {
  return clearStoreThunk(message, thunkAPI);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logoutUser: (state, { payload }) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
      }
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      addUserToLocalStorage(action.payload.user);
      toast.success("User Created");
    },
    [registerUser.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      addUserToLocalStorage(action.payload.user);
      toast.success("Successfully logged in");
    },
    [loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      addUserToLocalStorage(action.payload.user);

      toast.success("Successfully Updated User");
    },
    [updateUser.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error(action.payload);
    },
    [clearStore.rejected]: (state, action) => {
      state.isLoading = false;
      toast.error("There was an error!");
    },
  },
});

export default userSlice.reducer;

export const { toggleSidebar, logoutUser } = userSlice.actions;
