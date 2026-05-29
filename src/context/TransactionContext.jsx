import { createContext, useContext, useState } from "react";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {

  const [transactions, setTransactions] = useState([
    { id: 1, date: 'Apr 22', desc: 'Apple Music Subscription', cat: 'Entertainment', amount: -99, balance: 149901 },
    { id: 2, date: 'Apr 21', desc: 'Salary Credit', cat: 'Income', amount: 35000, balance: 184901 },
    { id: 3, date: 'Apr 20', desc: 'Starbucks Coffee', cat: 'Food', amount: -450, balance: 184451 },
    { id: 4, date: 'Apr 19', desc: 'Amazon Purchase', cat: 'Shopping', amount: -2500, balance: 181951 },
    { id: 5, date: 'Apr 16', desc: 'Netflix Subscription', cat: 'Entertainment', amount: -499, balance: 181452 },
    { id: 6, date: 'Apr 10', desc: 'Electricity Bill', cat: 'Bills', amount: -1200, balance: 180252 },
  ]);

  const [recentBeneficiaries] = useState([
    { id: 1, name: 'Rahul Sharma', amount: 5000 },
    { id: 2, name: 'Priya Patel', amount: 3000 },
    { id: 3, name: 'Amit Kumar', amount: 8000 },
  ]);

  const addTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  // spending data for Dashboard chart
  const spendingData = [
    { month: 'Jan', spend: 15000 },
    { month: 'Feb', spend: 14500 },
    { month: 'Mar', spend: 16000 },
    { month: 'Apr', spend: 15500 },
    { month: 'May', spend: 17000 },
    { month: 'Jun', spend: 16500 },
  ];

  return (
    <TransactionContext.Provider value={{
      transactions,
      recentBeneficiaries,
      spendingData,
      addTransaction,
    }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => {
  return useContext(TransactionContext);
};