import { createContext, useContext, useState } from "react";

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {

  const [accountsList, setAccountsList] = useState([
    { id: 1, type: 'Primary', label: 'Savings Account', number: 'XXXX XXXX 4892', balance: 184560, color: '#4f8ef7' },
    { id: 2, type: 'Business', label: 'Current Account', number: 'XXXX XXXX 7231', balance: 68320, color: '#22c55e' },
    { id: 3, type: '3yr @ 7.1%', label: 'Fixed Deposit', number: 'FD-202409-0041', balance: 500000, color: '#f59e0b' },
  ]);

  const [income] = useState(35000);
  const [spend] = useState(23000);

  // calculated automatically from accountsList
  const totalBalance = accountsList.reduce((sum, acc) => sum + acc.balance, 0);

  const addAccount = () => {
    const newAccount = {
      id: Date.now(),
      type: 'New',
      label: 'New Savings Account',
      number: 'XXXX 0000',
      balance: 0,
      color: '#f59e0b'
    };
    setAccountsList([...accountsList, newAccount]);
  };

  return (
    <AccountContext.Provider value={{
      accountsList,
      totalBalance,
      income,
      spend,
      addAccount,
    }}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAccount = () => {
  return useContext(AccountContext);
};