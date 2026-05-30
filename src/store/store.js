import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import accountReducer from "./slices/accountSlice";
import transactionReducer from "./slices/transactionSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,    // auth slice goes here
    account: accountReducer,  // account slice goes here
    transaction: transactionReducer,  // transaction slice goes here
  },
});

export default store;