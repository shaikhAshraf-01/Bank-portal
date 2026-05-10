import '../styles/cards.css'
function Cards(){
    return(
        <div className="cards">
              <nav className="cards-navbar">
                {/* Left Side (Empty to balance the center) */}
                <div className="nav-side"></div>
        
                {/* Center Side */}
                <div className="nav-center">
                  <h3>My&nbsp;Cards</h3>
                </div>
        
                {/* Right Side */}
                <div className="nav-side right">
                  <p>5/6</p>
                </div>
              </nav>
                <div className="cards-content">
                        <h2>My Cards</h2>
                    <div className='card-section'>
                        <div className="card1"></div>
                        <div className="card2"></div>
                    </div>
                    <div className='card-details'>
                      <div>
                        <p>Credit Limit</p>
                        <h3>200000</h3>
                      </div>
                      <div>
                        <p>Available </p>
                        <h3>140000</h3></div>
                      <div>
                        <p>Outstanding </p>
                        <h3>60000</h3>
                      </div>
                      <div>
                        <p>Due Date</p>
                        <h3>May 05</h3>
                      </div>
                    </div>
                    <h2>Card Controls</h2>
                    <div className='card-control'>
                      <div>
                        <p>Block Card</p>
                      </div>
                      <div>
                        <p>Set Pin</p>
                      </div>
                      <div>
                        <p>International</p>
                      </div>
                      <div>
                        <p>Spend Limit</p>
                      </div>
                      <div>
                        <p>Cashback</p>
                      </div>
                    </div>
                </div>

              </div>
    )
}
export default Cards;