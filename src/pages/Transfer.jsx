import '../styles/transfer.css';
function Transfer() {
  return (
    <div className="transfer-page">
       <nav className="transfer-navbar">
        {/* Left Side (Empty to balance the center) */}
        <div className="nav-side"></div>

        {/* Center Side */}
        <div className="nav-center">
          <h3>Transfer & Payments</h3>
        </div>

        {/* Right Side */}
        <div className="nav-side right">
          <p>4/6</p>
        </div>
      </nav>
      <div className="transfer-header">
        <h3>Transfer & Payments</h3>
      </div>
      <div className="payment-method">
      <div className='right-container'>
        <p style={{ fontSize: '14px', margin: '10px 5px' }}>New Transfer</p>
        <div className="form-group">
          <label htmlFor="acc-type"> From Account</label>
          <select name="acc-type" id="acc-type">
            <option value="savings">Savings Account</option>
            <option value="Current">Current Account</option>
            <option value="Fixed">fixed Deposite</option>
          </select>
          <label htmlFor="to-acc">To Account/ UPI ID</label>
          <input type="text" id="to-acc" value={'Enter account or UPI ID'}  />
          <label htmlFor="amount">Amount</label>
          <input type="text" id="amount" value={'Enter amount'} />
          <button className='transfer-btn'>CONFIRM TRANSFER </button>
        </div>
      </div>
      <div className='left-container'></div>
      </div>
    </div>
  )
}
export default Transfer;