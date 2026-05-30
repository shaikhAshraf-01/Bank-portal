import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",         // name of this slice
  initialState: {       // starting data
    user: null,
    isLoggedIn: false,
  },
  reducers: {           // actions + reducers together
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

// export actions
export const { login, logout } = authSlice.actions;

// export reducer
export default authSlice.reducer;