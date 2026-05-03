import {NavLink, useNavigate} from "react-router-dom";
import '../styles/sidebar.css'
import { FaUniversity, FaPowerOff } from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="side-panel">
      <div className="sidebar-logo">
        <FaUniversity />
        <span>NexaBank</span>
      </div>
      <nav className="sidebar-nav">
         <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <span className="sidebar-icon">📊</span>Dashboard
        </NavLink>
         <NavLink to="/accounts" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <span className="sidebar-icon">🏦</span>Accounts
        </NavLink>
        <NavLink to="/statement" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <span className="sidebar-icon">📄</span>Statement
        </NavLink>
        <NavLink to="/transfer" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <span className="sidebar-icon">💸</span>Transfer
        </NavLink>
        <NavLink to="/cards" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <span className="sidebar-icon">💳</span>Cards
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
          <span className="sidebar-icon">⚙️</span>Settings
        </NavLink>
      </nav>
        <button className="logout-button" onClick={() => navigate('/login')}>
           <FaPowerOff />Logout
        </button>
    </div>
  )
}
export default Sidebar;