import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import { AccountProvider } from './context/AccountContext.jsx'
import {TransactionProvider} from './context/TransactionContext.jsx'
import {SettingsProvider} from './context/SettingContext.jsx'
import { Provider } from 'react-redux';        // ← add
import store from './store/store.js'; 
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
<Provider store={store}>    {/* ← wrap with Provider */}
      
          <TransactionProvider>
            <SettingsProvider>
              <App />
            </SettingsProvider>
          </TransactionProvider>
       
</Provider>
    </BrowserRouter>
  </StrictMode>,
)
   