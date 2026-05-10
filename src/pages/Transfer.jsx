import '../styles/transfer.css';
import {useState} from 'react';
import { FaArrowRight } from 'react-icons/fa';
import {Legend,BarChart,Tooltip, Cell, Bar,XAxis, YAxis, ResponsiveContainer} from 'recharts';
function Transfer() {
  const  [currentAcc, setcurrentAcc]=useState('savings');
const limit = [
  { name: 'UPI', used: 45000, remaining: 200000 - 45000, total: 200000 },
  { name: 'NEFT', used: 150000, remaining: 500000 - 150000, total: 500000 },
  { name: 'RTGS', used: 300000, remaining: 500000 - 300000, total: 500000 },
];

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
        <h3>Transfer&nbsp;&&nbsp;Payments</h3>
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
  <h3>Transfer Limits</h3>
  <div style={{ width: '100%', height: 250, marginTop: '20px' }}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart layout='vertical' data={limit} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        {/* dataKey must be a string "name" */}
        <YAxis 
          dataKey="name" 
           type="category"
          axisLine={false} 
          tickLine={false} 
          fontSize={12}
           tick={{ fill: '#ffffff', fontWeight: '500' }}
        />
        <XAxis type="number" hide />
        
        {/* Optional: Add Tooltip to see exact numbers on hover */}
<Tooltip
cursor={{fill:'transparent'}}
 contentStyle={{ 
    backgroundColor: '#333', 
    border: 'none', 
    borderRadius: '8px', 
    color: '#fff' 
  }} 
  
  // 2. Style for the text inside
  itemStyle={{ color: '#ffffff' }}
  // 3. Optional: Style for the title (like "UPI" or "NEFT")
  labelStyle={{ color: '#0ad814', fontWeight: 'bold' }}
  formatter={(value, name) => [value, name === 'used' ? 'Used' : 'Remaining']}
/>
        <Legend iconType="circle" verticalAlign="bottom" height={36}/>
        {/* dataKey must be a string "amount" */}
        <Bar
         dataKey="used"
          stackId="a"
           barSize={30}
           fill='#3f1ae2' 
           activeBar={false}
           />
         
       

        {/* Remaining Amount (The Empty Part) */}
        <Bar dataKey="remaining" stackId="a" fill="#e5e7eb" radius={[6, 6, 0, 0]} barSize={40} />
      </BarChart>
    </ResponsiveContainer>
  </div>
 
</div>

      </div>
      </div>
    </div>
  )
}
export default Transfer;