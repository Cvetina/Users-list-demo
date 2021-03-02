import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/users.slice";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
