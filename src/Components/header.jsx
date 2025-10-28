import React from 'react'
import Logo from '../assets/svg/Logo.svg'

const header = () => {
  return (
    <div className="container">
        <div className='header'>
        <div className="content">
            <a href="/"><img src={Logo} alt="" /></a>
            <div className="head-right-text">
                <ul className='menu-ul'>
                    <li className='li-item'><a href="/">Home</a></li>
                    <li className='li-item'><a href="/">How it works</a></li>
                    <li className='li-item'><a href="/">What we do</a></li>
                    <li className='li-item'><a href="/">Who we help</a></li>
                    <li className='li-item'><a href="/">Resources</a></li>
                </ul>
                <div className="logins">
                    <button className='login'>Login</button>
                    <button className='Talk'>Talk to an Expert</button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default header