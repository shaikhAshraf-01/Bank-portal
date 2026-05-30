import '../styles/statement.css';
import { FaDownload } from 'react-icons/fa';
import { useSelector } from 'react-redux';


  
 
function Statement(){
const transactions = useSelector((state) => state.transaction.transactions);    
return(
        <div className="statement">
             <nav className="statement-navbar">
        {/* Left Side (Empty to balance the center) */}
        <div className="nav-side"></div>
        {/* Center Side */}
        <div className="nav-center">
          <h3>statement</h3>
        </div>
        {/* Right Side */}
        <div className="nav-side right">
          <p>3/6</p>
        </div>
      </nav>
       <div className="statement-header">
        <div className="left">
            <h3>Account statement</h3>    
            <p>Saving Account - xxxx xxxx 4892</p>
        </div>
        <button className="download-pdf" >
          <FaDownload /> &nbsp;&nbsp; Download PDF
        </button>
      </div>
      <div className="statement-period-boxes">
        <button>This Month </button>
            <button>Last Month </button>
                <button>3 Months  </button>
                    <button> Custom Range </button>

      </div>
  


<div className="transaction-section">
  <table className="transaction-table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Category</th>
        <th>Amount</th>
        <th>Balance</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((item) => (
        <tr key={item.id}>
          <td>{item.date}</td>
          <td>{item.desc}</td>
          <td>{item.cat}</td>
          <td style={{ color: item.amount > 0 ? '#22c55e' : '#ef4444', fontWeight: 'bold' }}>
                  {item.amount > 0 ? '+' : ''}₹{Math.abs(item.amount).toLocaleString('en-IN')}
                </td>
                <td>₹{item.balance.toLocaleString('en-IN')}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        </div>
    )
}
export default Statement;