import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { AccountProvider } from './context/AccountContext.jsx'
import {TransactionProvider} from './context/TransactionContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AccountProvider>
          <TransactionProvider>
          <App />
          </TransactionProvider>
        </AccountProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
   