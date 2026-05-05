import '../styles/statement.css';
import { FaDownload } from 'react-icons/fa';

    const TransactionData = [
  { id: 1, date: 'Apr 22', desc: 'Apple Music Subscription', cat: 'Entertainment', amt: '-₹99', bal: '₹1,49,901' },
  { id: 2, date: 'Apr 21', desc: 'Salary Credit', cat: 'Income', amt: '+₹35,000', bal: '₹1,84,901' },
  { id: 3, date: 'Apr 20', desc: 'Starbucks Coffee', cat: 'Food', amt: '-₹450', bal: '₹1,84,451' },
  { id: 4, date: 'Apr 19', desc: 'Amazon Purchase', cat: 'Shopping', amt: '-₹2,500', bal: '₹1,81,951' },
  { id: 5, date: 'Apr 16', desc: 'Amazon Purchase', cat: 'Shopping', amt: '-₹2,500', bal: '₹1,81,951' },
  { id: 6, date: 'Apr 10', desc: 'Amazon Purchase', cat: 'Shopping', amt: '-₹2,500', bal: '₹1,81,951' },
  { id: 6, date: 'Apr 10', desc: 'Amazon Purchase', cat: 'Shopping', amt: '-₹2,500', bal: '₹1,81,951' },
  { id: 6, date: 'Apr 10', desc: 'Amazon Purchase', cat: 'Shopping', amt: '-₹2,500', bal: '₹1,81,951' },
  { id: 6, date: 'Apr 10', desc: 'Amazon Purchase', cat: 'Shopping', amt: '-₹2,500', bal: '₹1,81,951' },
  { id: 6, date: 'Apr 10', desc: 'Amazon Purchase', cat: 'Shopping', amt: '-₹2,500', bal: '₹1,81,951' },
  { id: 6, date: 'Apr 10', desc: 'Amazon Purchase', cat: 'Shopping', amt: '-₹2,500', bal: '₹1,81,951' },
];

function Statement(){
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
      {TransactionData.map((item) => (
        <tr key={item.id}>
          <td>{item.date}</td>
          <td>{item.desc}</td>
          <td>{item.cat}</td>
          <td style={{ color: item.amt.includes('+') ? '#22c55e' : '#ef4444', fontWeight: 'bold' }}>
            {item.amt}
          </td>
          <td>{item.bal}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        </div>
    )
}
export default Statement;