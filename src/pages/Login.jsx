import { useState, useRef, useEffect  } from 'react'
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
  const emailRef=useRef();
  const [hasEmailError, setHasEmailError] = useState(false);
  const passRef=useRef();
  const[hasPasswordError, setHasPasswordError] = useState(false);


  
  const handleDashboard = async () => {
    if (email.trim() === '') {
      setHasEmailError(true);
      if (emailRef.current) {
        emailRef.current.placeholder =` ⚠ Please Enter Email ID`; // Update text
        emailRef.current.focus(); // Snap user focus to input
      }
      return; // Terminate execution early
    }
     if (password.trim() === '') {
      setHasPasswordError(true);
      if (passRef.current) {
        passRef.current.placeholder =` ⚠Please Enter password`; // Update text
        passRef.current.focus(); // Snap user focus to input
      }
      return; // Terminate execution early
    }
    try {
      await login(email, password);
      navigate('/dashboard');
    }catch(error){
      console.error("Login failed:", error);
    }
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
            <input className={hasEmailError ? 'error' : ''}
              ref={emailRef}
              type="email"
              id="email"
              placeholder="user@nexabank.com"
              value={email}
              onChange={(e) =>{ setEmail(e.target.value);
                 setHasEmailError(false);
                 if (emailRef.current) {
                emailRef.current.placeholder = "user@nexabank.com"
              }
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
              <div className="password-wrapper">
              <input className={hasPasswordError ? 'error' : ''}
                ref={passRef}
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="••••••••••"
                value={password}
                onChange={(e) => {setPassword(e.target.value);
                  setHasPasswordError(false);
                  if (passRef.current) {
                    passRef.current.placeholder = "••••••••••"
                  }
                }}
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