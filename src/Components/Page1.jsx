import React from 'react'
import Img2 from '../assets/img/70img.png'
import CardImg from '../assets/img/card-img.png'
import CardImg2 from '../assets/img/card-img2.png'
import CardImg3 from '../assets/img/card-img3.png'


const Page1 = () => {
  return (
    <div className='container'>
      <div className="finance">
      <div className="content">
        <div className="page-top">
            <div className="page-top-img"><img src={Img2} alt="" /></div>
            <div className="page-top-text">
              <h1>The best finance stack for entrepreneurs</h1>
              <p>70% of companies switch to us from their DIY or legacy system. Now, get your bookkeeping, tax prep and CFO problems, solved. Complete our contact form, and find out why 9 out of 10 customers recommend us.</p>
            </div>
        </div>
        <div className="page-bottom">
          <div className="nick-name">
            <h1>Why Switch?</h1>
          </div>
          <div className="page-cards">
            <div className="item-card">
              <img src={CardImg}/>
              <h3>Powerful software</h3>
              <p>Included in our service, each customer gets in-house software to access live financial dashboards and real-time management reports.</p>
            </div>
             <div className="item-card">
              <img src={CardImg2}/>
              <h3>Track cashflow</h3>
              <p>Stay on top of your working capital, taxes, and cashflow, to ensure your business is performing at its best.</p>
            </div>
             <div className="item-card">
              <img src={CardImg3}/>
              <h3>Award winning support</h3>
              <p>Expect the best from us. Get a dedicated finance team that will handle all your accounting, R&D credits and CFO needs.</p>
            </div>
          </div>
          <button className='bot-btn'>Discover what we do</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Page1