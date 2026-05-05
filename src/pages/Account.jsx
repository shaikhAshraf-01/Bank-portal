import "../styles/account.css";
import { useState } from 'react';

function Account() {
  const [accountsList, setAccountsList] = useState([
    { type: 'Primary', label: 'Savings Account', number: 'XXXX XXXX 4892', balance: '₹1,84,560.00', color: '#4f8ef7' },
    { type: 'Business', label: 'Current Account', number: 'XXXX XXXX 7231', balance: '₹68,320.50', color: '#22c55e' },
    { type: '3yr @ 7.1%', label: 'Fixed Deposit', number: 'FD-202409-0041', balance: '₹5,00,000.00', color: '#f59e0b' },
  ]);
   const addAccount = () => {
    const newAccount = {
      type: 'New',
      label: 'New Savings Account',
      number: 'XXXX 0000',
      balance: '₹0.00',
      color: '#f59e0b'
    };

    // एरे को अपडेट करने का सही तरीका (Spread Operator)
    setAccountsList([...accountsList, newAccount]);
  };
  return (
    <div className="account">
      <nav className="account-navbar">
        {/* Left Side (Empty to balance the center) */}
        <div className="nav-side"></div>
        {/* Center Side */}
        <div className="nav-center">
          <h3>Accounts</h3>
        </div>
        {/* Right Side */}
        <div className="nav-side right">
          <p>2/6</p>
        </div>
      </nav>
      <div className="account-header">
        <div className="left">
            <h3>My Accounts</h3>    
            <p>Manage all your bank accounts in one place</p>
        </div>
        <button className="add-btn" onClick={addAccount}>+ Add Account</button>
      </div>
      <div className="accounts-list">
        {/* अब map 'accountList' state पर चलेगा */}
        {accountsList.map((acc, index) => (
          <div key={index} className="account-card">
           <div className="details">
            <h3>{acc.label}</h3>
            <p>{acc.number}</p>
            <h3>{acc.balance}</h3>
            </div> 
            <div className="buttons">
              <div className="type-name">
                <p>{acc.type}</p>
              </div>
              <div className="all-btn">
                <button className="view-btn btn">View</button>
                <button className="transfer-btn btn">Transfer</button>    
                <button className="detail-btn btn">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}
export default Account;
