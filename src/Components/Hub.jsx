import React from 'react'
import Hubimg from '../assets/img/Hub-img.png'

const Hub = () => {
  return (
    <div className='hub'>
        <div className="content">
            <div className="hub-text">
                <h1>The AC Hub</h1>
                <p>Explore our dedicated online resources. We've got the tips, tricks and online accounting know-how for business success.</p>
                <button className='hub-btn'>View Hub</button>
            </div>
            <div className="hub-img"><img src={Hubimg} alt="" /></div>
        </div>
    </div>
  )
}

export default Hub