import React from 'react'
import Img1 from '../assets/img/Img1.png'

const Showcase = () => {
  return (
    <div className="container">
      <div className="side-main">
                  <div className="content">
                      <div className="main-text">
                          <h1>Get your finances right</h1>
                          <p>Get your finances right with Accountancy Cloud. We offer the best accounting, R&D credits and CFO services for ambitious businesses who want to grow.</p>
                          <div className="main-btns">
                              <p>Switching to us is simple</p>
                              <button className='main-btn1'>Talk to us</button>
                          </div>
                      </div>
                      <div className="main-img"><img src={Img1} alt="img"/></div>
                  </div>
              </div>
    </div>
  )
}

export default Showcase