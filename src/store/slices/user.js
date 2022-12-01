import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: {} };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
});
