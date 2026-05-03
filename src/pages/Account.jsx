import "../styles/account.css";
const accounts = [
  { type: 'Primary', label: 'Savings Account', number: 'XXXX XXXX 4892', balance: '₹1,84,560.00', color: '#4f8ef7' },
  { type: 'Business', label: 'Current Account', number: 'XXXX XXXX 7231', balance: '₹68,320.50', color: '#22c55e' },
  { type: '3yr @ 7.1%', label: 'Fixed Deposit', number: 'FD-202409-0041', balance: '₹5,00,000.00', color: '#f59e0b' },
];
function Account() {
  return (
    <div className="account">
      <nav className="navbar">
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
      <div className="header">
        <div className="left">
            <h3>My Accounts</h3>    
            <p>Manage all your bank accounts in one place</p>
        </div>
        <button className="add-btn">+ Add Account</button>
      </div>

      <div className="account-table">
        
      </div>
    </div>
  );
}
export default Account;
