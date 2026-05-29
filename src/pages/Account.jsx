import "../styles/account.css";
import { useState } from 'react';
import {useAccount} from "../context/AccountContext";

function Account() {
  
   const { accountsList, addAccount } = useAccount();
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
        {accountsList.map((acc) => (
          <div key={acc.id||acc.number} className="account-card">
           <div className="details">
            <h3>{acc.label}</h3>
            <p>{acc.number}</p>
            <h3>{acc.balance.toLocaleString('en-IN')}</h3>
            </div> 
            <div className="right-buttons">
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
