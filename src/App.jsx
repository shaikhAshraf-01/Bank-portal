import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Accounts from './pages/Account';
import Statement from './pages/Statement';
import Transfer from './pages/Transfer';
import Cards from './pages/Cards';
import Setting from './pages/Setting';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/statement" element={<Statement />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/settings" element={<Setting />} />
      </Route>
    </Routes>
    </HashRouter>
  );
}

export default App;