import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/";

export const fetchAllUsers = createAsyncThunk(
  "fetchAllUsers",
  async () => {
    const response = await axios.get(`${API_URL}users`);
    return response.data;
  }
);

export const fetchUserPosts = createAsyncThunk(
  "fetchUserPosts",
  async (userId) => {
    const response = await axios.get(`${API_URL}posts?userId=${userId}`);
    return response.data;
  }
);

const INITIAL_STATE = { usersById: {}, usersIds: [] };

export const usersSlice = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    updateUserInput: (state, action) => {
      const { userId, inputType, value } = action.payload;
      state.usersById[userId][inputType] = value;
    },
  },
  extraReducers: {
    [fetchAllUsers.fulfilled]: (state, action) => {
      action.payload.forEach((user) => {
        state.usersById[user.id] = { ...user, title: user.name, ...user.address };
        delete state.usersById[user.id].address;
        state.usersIds.push(user.id);
      });
    },
    [fetchUserPosts.fulfilled]: (state, action) => {
      action.payload.forEach((post) => {
        state.usersById[post.userId].posts = action.payload;
      });
    },
  },
});

export const { updateUserInput } = usersSlice.actions;

export const selectUsersIds = (state) => state.users.usersIds;

export const selectUserProperties = (userId, prop) => (state) => state.users.usersById[userId][prop];

export default usersSlice.reducer;
