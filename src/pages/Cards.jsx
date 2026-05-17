import { FaLock,FaThumbtack, FaGlobe,FaChartBar,FaMoneyBillWave } from 'react-icons/fa'
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
                        <div className="card1">
                          <div className="card-left">
                            <p style={{fontSize:'24px', color:'white'}}> * * * *   * * * *   4892 </p>
                            <p>Alex Rodrigues</p>
                            <p>NexaBank Signature Card</p>
                          </div>
                          <div className="card-right">
                            <h3  style={{paddingTop:'10px',fontFamily:'cursive'}}>VISA</h3>
                            <p style={{paddingBottom:'40px'}}>Exp: 08/28</p>
                          </div>

                        </div>
                        <div className="card2">
                           <div className="card-left">
                            <p style={{fontSize:'24px', color:'white'}}> * * * *   * * * *   4892 </p>
                            <p>Alex Rodrigues</p>
                            <p>NexaBank Debit Card</p>
                          </div>
                          <div className="card-right">
                            <h3  style={{paddingTop:'10px',fontFamily:'cursive'}}>MC</h3>
                            <p style={{paddingBottom:'40px'}}>Exp: 04/27</p>
                          </div>
                        </div>
                    </div>
                    <div className='card-details'>
                      <div>
                        <p>Credit Limit</p>
                        <h3 style={{color:'blue'}}> {"₹"}200000</h3>
                      </div>
                      <div>
                        <p>Available </p>
                        <h3 style={{color:'green'}}> {"₹"}140000</h3></div>
                      <div>
                        <p>Outstanding </p>
                        <h3 style={{color:'orange'}}> {"₹"}60000</h3>
                      </div>
                      <div>
                        <p>Due Date</p>
                        <h3 style={{color:'orangered'}}>May 05</h3>
                      </div>
                    </div>
                    <h2 className='control-title' >Card Controls</h2>
                    <div className='card-control'>
                      <div>
                       <FaLock style={{color:'yellow'}} />
                        <p>  Block Card</p>
                      </div>
                      <div>
                        <FaThumbtack style={{color:'red'}} />
                        <p>  Set Pin</p>
                      </div>
                      <div>
                        <FaGlobe />
                        <p>International</p>
                      </div>
                      <div>
                        <FaChartBar style={{color:'blueviolet'
                        }} />
                        <p>  Spend Limit</p>
                      </div>
                      <div>
                        <FaMoneyBillWave style={{color:'green'}} />
                        <p>  Cashback</p>
                      </div>
                    </div>
                </div>

              </div>
    )
}
export default Cards;