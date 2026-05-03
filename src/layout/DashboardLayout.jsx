import { Outlet } from 'react-router-dom';
import Sidebar from '../component/Sidebar';

function DashboardLayout() {
  return (
    <div style={{ 
      display: 'flex', 
      width: '100%', 
      minHeight: '100vh',
      backgroundColor: '#1d1155' // Ensures no white gaps
    }}>
      {/* Sidebar Container */}
      <div style={{
        width: '250px',   // Set a fixed width for your sidebar
        flexShrink: '0',
        minHeight: '100vh',
        position: 'fixed', // Keep sidebar fixed while scrolling if desired
        zIndex: 10
      }}>
        <Sidebar />
      </div>

      {/* Main Content Area (Outlet) */}
      <div style={{
        flex: '1',
        minHeight: '100vh',
        marginLeft: '250px', // Match this EXACTLY to the sidebar width
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        width: 'calc(100% - 250px)' // Ensures it doesn't overflow
      }}>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
