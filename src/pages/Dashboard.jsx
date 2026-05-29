import "../styles/dashboard.css";
import { useAuth } from "../context/AuthContext";
import {useAccount} from "../context/AccountContext";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useNavigate } from "react-router-dom";

const SpendingData=[
  {month: 'Jan', spend: 15000},
  {month: 'Feb', spend: 14500},
  {month: 'Mar', spend: 16000},
  {month: 'Apr', spend: 15500},
  {month: 'May', spend: 17000},
  {month: 'Jun', spend: 16500},
]


function Dashboard() {
   const { user } = useAuth();
  const { totalBalance, income, spend } = useAccount();
  const navigate=useNavigate();
  const Transfer=()=>{
    navigate('/transfer');
  }
const Statements=()=>{
  navigate('/statement');
}
const Cards=()=>{
  navigate('/cards');
}
  return (
    <div className="dashboard">
      <nav className="dashboard-navbar">
        {/* Left Side (Empty to balance the center) */}
        <div className="nav-side"></div>

        {/* Center Side */}
        <div className="nav-center">
          <h3>Dashboard</h3>
        </div>

        {/* Right Side */}
        <div className="nav-side right">
          <p>1/6</p>
        </div>
      </nav>

      <div className="dashboard-header">
        <h2>Good Morning, {user?.name} 👋 </h2>
        <p>Here's your financial overview for today.</p>
      </div>

      <div className=" dashboard-boxes">
          <div className="box box1">
          <h4>Total Balance</h4>
          <p>₹{totalBalance.toLocaleString('en-IN')}</p>
        </div>
        <div className="box box2">
          <h4>Monthly Income</h4>
          <p>₹{income.toLocaleString('en-IN')}</p>
        </div>
        <div className="box box3">
          <h4>Monthly Spend</h4>
          <p>₹{spend.toLocaleString('en-IN')}</p>
        </div>
      
      </div>

      <div className="summary-actions">
        <div className="summary">
  <p className="card-title">Monthly Comparison</p>
  <ResponsiveContainer width="100%" height={250}>
    <BarChart data={SpendingData}>
      {/* Adds background grid lines */}
      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
      
      {/* X and Y Axis labels */}
      <XAxis dataKey="month" stroke="#a0a0a0" fontSize={10} />
      <YAxis stroke="#a0a0a0" fontSize={10} />
      
      <Tooltip cursor={{fill: 'transparent'}} />
      

      {/* The actual bars */}
      <Bar dataKey="spend" fill="#ef4444" barSize={20} radius={[2, 2, 0, 0]} name="Spend" />
    </BarChart>
  </ResponsiveContainer>

        </div>
        
        <div className="actions">
          <h3>Quick Actions</h3>
          <button className="action-btn" onClick={Transfer}>Send Money</button>
          <button className="action-btn" >Request</button>
          <button className="action-btn" onClick={Statements}>Statement</button>
          <button className="action-btn" onClick={Cards}>Cards</button>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
