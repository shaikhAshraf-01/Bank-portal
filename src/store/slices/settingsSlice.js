import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
    name:"settings",
    initialState:{
         twoFA: true,
          biometric: true,
          alerts: true,
          emailStmt: true,
          insights: true
        
    },
    reducers:{
        toggleTwoFA: (state) => {
            state.twoFA = !state.twoFA;
        },
        toggleBiometric: (state) => {
            state.biometric = !state.biometric;
        },
        toggleAlerts: (state) => {
            state.alerts = !state.alerts;
        },
        toggleEmailStmt: (state) => {
            state.emailStmt = !state.emailStmt;
        },
        toggleInsights: (state) => {
            state.insights = !state.insights;
        },
    }
})
export const { toggleTwoFA, toggleBiometric, toggleAlerts, toggleEmailStmt, toggleInsights } = settingsSlice.actions;
export default settingsSlice.reducer;