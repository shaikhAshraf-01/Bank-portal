import '../styles/setting.css'
function Setting(){
    return(
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
                        <div className="logo">
                            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile-logo" />
                        </div>
                        <div className="name">
                            <h2>Alex Rodrigues</h2>
                            <p>alex@123gmail.com</p>
                        </div>
                        <div className="edit">
                            <button>Edit</button>
                            </div>
                        </div>
                    </div>
                    </div>
              </div>
    );
}
export default Setting;