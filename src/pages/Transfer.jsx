import '../styles/transfer.css';
import {useState} from 'react';
import { FaArrowRight } from 'react-icons/fa';
function Transfer() {
  const  [currentAcc, setcurrentAcc]=useState('savings');

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
        <p>New Transfer</p>
        <div className="form-group">
          <label htmlFor="acc-type"> From Account</label>
          <select name="acc-type" id="acc-type" value={currentAcc} onChange={(e) => setcurrentAcc(e.target.value)}>
            <option value="savings">Savings Account</option>
            <option value="Current">Current Account</option>
            <option value="Fixed">fixed Deposite</option>
          </select>
          <label htmlFor="to-acc">To Account/ UPI ID</label>
          <input type="text" id="to-acc" placeholder='Enter account or UPI ID' />
          <label htmlFor="amount">Amount</label>
          <input type="text" id="amount" placeholder='Enter amount' />
          <label htmlFor="description">Description</label>
          <input type="text" id="description" placeholder='e.g. Rent, Groceries...' />
          <div className="buttons">
            <button>UPI</button>
            <button>NEFT</button>
            <button>RTGS</button>
            <button>IMPS</button>
          </div>
          <button className='transfer-btn'>CONFIRM TRANSFER </button>
        </div>
      </div>
      <div className='left-container'>
        <div className="left-top">
          <h3>Recent Beneficiaries</h3>
          <p><FaArrowRight className='icon'/> Rahul Sharma - 5000</p>
          <p><FaArrowRight className='icon'/> Rahul Sharma - 5000</p>
          <p><FaArrowRight className='icon'/> Rahul Sharma - 5000</p>
        </div>
        <div className="left-bottom">
          <h3>Transfer Limit</h3>
          
        </div>
      </div>
      </div>
    </div>
  )
}
export default Transfer;