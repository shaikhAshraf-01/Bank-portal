import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    accountsList: [
      { id: 1, type: 'Primary', label: 'Savings Account', number: 'XXXX XXXX 4892', balance: 184560, color: '#4f8ef7' },
      { id: 2, type: 'Business', label: 'Current Account', number: 'XXXX XXXX 7231', balance: 68320, color: '#22c55e' },
      { id: 3, type: '3yr @ 7.1%', label: 'Fixed Deposit', number: 'FD-202409-0041', balance: 500000, color: '#f59e0b' },
    ],
    income: 40000,
    spend: 23000,
  },
  reducers: {
    addAccount: (state) => {
      state.accountsList.push({
        id: Date.now(),
        type: 'New',
        label: 'New Savings Account',
        number: 'XXXX 0000',
        balance: 0,
        color: '#f59e0b'
      });
    },
  },
});

export const { addAccount } = accountSlice.actions;
export default accountSlice.reducer;