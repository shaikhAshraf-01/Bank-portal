
import "../styles/setting.css";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { toggleTwoFA, toggleBiometric, toggleAlerts, toggleEmailStmt, toggleInsights } from '../store/slices/settingsSlice';
import {
  FaLock,
  FaUser,
  FaMobile,
  FaIdBadge,
  FaFingerprint,
  FaShieldAlt,
  FaBell,
  FaLaptopMedical,
  FaEnvelope,
  FaChartBar // 2. Swapped FaChartSimple to FaChartBar to prevent crash
} from "react-icons/fa";

function Setting() {
 const user = useSelector((state) => state.auth.user);

const dispatch = useDispatch();
const { twoFA, biometric, alerts, emailStmt, insights } = useSelector((state) => state.settings);

  return (
    <div className="setting">
      <nav className="setting-navbar">
      
                {/* Left Side (Empty to balance the center) */}
                <div className="nav-side"></div>
        
                {/* Center Side */}
                <div className="nav-center">
                  <h3>Settings</h3>
                </div>
        
                {/* Right Side */}
                <div className="nav-side right">
                  <p>6/6</p>
                </div>
              </nav>
              <div className="setting-content">
        <h3>Manage your account preferences and security</h3>
        
        <p>PROFILE</p>
        <div className="setting-profile">
          <div className="setting-profile-item">
            <div className="logo"><FaUser /></div>
            <div className="name">
              <h2>{user?.name}</h2>
              <h4>{user?.email}</h4>
            </div>
            <div className="edit"><button>Edit Profile</button></div>
          </div>
          <div className="setting-profile-item">
            <div className="logo"><FaMobile /></div>
            <div className="name">
              <h2>Mobile Number</h2>
              <h4>+91 999 999 9999</h4>
            </div>
            <div className="edit"><button>Change Number</button></div>
          </div>
          <div className="setting-profile-item">
            <div className="logo"><FaIdBadge /></div>
            <div className="name">
              <h2>KYC Status</h2>
              <h4>Aadhar & Pan Linked</h4>
            </div>
            <div className="edit"><button>View</button></div>
          </div>
        </div>

        <p>SECURITY</p>
        <div className="setting-profile">
          <div className="setting-profile-item">
            <div className="logo"><FaLock /></div>
            <div className="name">
              <h2>Change Password</h2>
              <h4>Last changed 3 months ago</h4>
            </div>
            <div className="edit"><button>Change Password</button></div>
          </div>
          <div className="setting-profile-item">
            <div className="logo"><FaShieldAlt /></div>
            <div className="name">
              <h2>Two-Factor Authentication</h2>
              <h4>SMS OTP Enabled</h4>
            </div>
            <div className="edit">
              {/* Dynamic classes and text based on state */}
              <button
        className={`toggle-btn ${twoFA ? "on" : "off"}`}
        onClick={() => dispatch(toggleTwoFA())}     
      >
        {twoFA ? "ON" : "OFF"}
      </button>
            </div>
          </div>
          <div className="setting-profile-item">
            <div className="logo"><FaFingerprint /></div>
            <div className="name">
              <h2>Biometric Login</h2>
              <h4>Use fingerprint for login</h4>
            </div>
            <div className="edit">
              <button 
                className={`toggle-btn ${biometric ? "on" : "off"}`} 
                onClick={() => dispatch(toggleBiometric())}
              >
                {biometric ? "ON" : "OFF"}
              </button>
            </div>
          </div>
          <div className="setting-profile-item">
            <div className="logo"><FaLaptopMedical /></div>
            <div className="name">
              <h2>Active Sessions</h2>
              <h4>2 Devices currently login</h4>
            </div>
            <div className="edit"><button>View Details</button></div>
          </div>
        </div>

        <p>NOTIFICATIONS</p>
        <div className="setting-profile">
          <div className="setting-profile-item">
            <div className="logo"><FaBell /></div>
            <div className="name">
              <h2>Transaction Alerts</h2>
              <h4>Get notified about your transactions</h4>
            </div>
            <div className="edit">
              <button 
                className={`toggle-btn ${alerts ? "on" : "off"}`} 
                onClick={() => dispatch(toggleAlerts())}
              >
                {alerts ? "ON" : "OFF"}
              </button>
            </div>
          </div>
          <div className="setting-profile-item">
            <div className="logo"><FaEnvelope /></div>
            <div className="name">
              <h2>Email Statements</h2>
              <h4>Receive monthly email statements</h4>
            </div>
            <div className="edit">
              <button 
                className={`toggle-btn ${emailStmt ? "on" : "off"}`} 
                onClick={() => dispatch(toggleEmailStmt())}
              >
                {emailStmt ? "ON" : "OFF"}
              </button>
            </div>
          </div>
          <div className="setting-profile-item">
            <div className="logo"><FaChartBar /></div>
            <div className="name">
              <h2>Spending Insights</h2>
              <h4>Weekly spending reports</h4>
            </div>
            <div className="edit">
              <button 
                className={`toggle-btn ${insights ? "on" : "off"}`} 
                onClick={() => dispatch(toggleInsights())}
              >
                {insights ? "ON" : "OFF"}
              </button>
            </div>
          </div>
        </div>
      </div>
    
  </div>
  );
}
export default Setting;
