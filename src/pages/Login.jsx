import { useState  } from 'react'
import {useAuth} from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'
import { FaUniversity , FaGoogle, FaFacebook} from "react-icons/fa";
import '../styles/login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const { login } = useAuth();
  const navigate = useNavigate()
  
  const handleDashboard = () => {
      const success = login(email, password)  // ← use context login
    if (!success) {
      alert('Fill details to login in your account')
      return
    }
    navigate('/dashboard')
  }


  return(
    <div className="loginPage">
      {/* Left side content */}
        <div className="leftSide">
       <span className="Bank-icon"> <FaUniversity size={40} color="#d4e4d0" /></span>
        <h2>NexaBank</h2>
        <p>Your trusted digital banking partner</p>
        <div className="login-features">
          <div className="feature">
            <span>🔐</span>
            <span>Bank-Grade Security</span>
        </div>
        <div className="feature">
            <span>📱</span>
            <span>Mobile Ready</span>
        </div>
        <div className="feature">
            <span>💸</span>
            <span>Instant Transfers</span>
        </div>
        </div>
        </div>

{/* middle space */}
        <div className="middle"></div>
        {/* right side content */}
        <div className="rightSide">
          <h3>Welcome Back</h3>
          <p>Sign in to your account</p>
         <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="user@nexabank.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
              <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? '🙈' : '👁'}
              </button>
            </div>
          </div>
          <div className="remember-forget">
            <div className="remember-me">

              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                id='remember'
                />
            <label htmlFor='remember'>
              Remember me
            </label>
                </div>
                <div className="forget">
                  <a href="#">Forget Password?</a>
                </div>
          </div>
          <button className="login-button" onClick={handleDashboard}>SIGN IN  </button>
           <div className="login-divider">
            <p>-- or continue with -- </p>
            </div>
          <div className="social-login">
            <button className="social-button google"> <FaGoogle /> Google</button>
            <button className="social-button facebook"> <FaFacebook /> Facebook</button>
          </div>
        </div>
    
    </div>
  )
}
export default Login;