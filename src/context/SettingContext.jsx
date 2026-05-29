import { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {

  const [twoFA, setTwoFA] = useState(true);
  const [biometric, setBiometric] = useState(true);
  const [alerts, setAlerts] = useState(true);
  const [emailStmt, setEmailStmt] = useState(true);
  const [insights, setInsights] = useState(true);

  const toggleTwoFA = () => setTwoFA(!twoFA);
  const toggleBiometric = () => setBiometric(!biometric);
  const toggleAlerts = () => setAlerts(!alerts);
  const toggleEmailStmt = () => setEmailStmt(!emailStmt);
  const toggleInsights = () => setInsights(!insights);

  return (
    <SettingsContext.Provider value={{
      twoFA, toggleTwoFA,
      biometric, toggleBiometric,
      alerts, toggleAlerts,
      emailStmt, toggleEmailStmt,
      insights, toggleInsights,
    }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  return useContext(SettingsContext);
};