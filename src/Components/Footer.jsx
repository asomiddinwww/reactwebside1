import React from 'react'
import FotLogo from '../assets/img/fot-logo.png'
import Botimg from '../assets/img/bot-img.png'

const Footer = () => {
  return (
    <footer>
        <div className="content">
            <div className="fot-logo">
                <a href="/"><img src={FotLogo}/></a>
                <h1>Your new finance team</h1>
            </div>
            <div className="fot-menu">
                <ul className="ul-item">
                    <li className="li-item-fot bold">How it works</li>
                    <li className="li-item-fot"><a href="/">Hassle Free Switching</a></li>
                </ul>
                 <ul className="ul-item">
                    <li className="li-item-fot bold">What we do</li>
                    <li className="li-item-fot"><a href="/">Finance Teams</a></li>
                    <li className="li-item-fot"><a href="/">Tax</a></li>
                    <li className="li-item-fot"><a href="/">R&D Tax Credits</a></li>
                    <li className="li-item-fot"><a href="/">A platform for success</a></li>
                    <li className="li-item-fot"><a href="/">Software Integrations</a></li>
                </ul>
                 <ul className="ul-item">
                    <li className="li-item-fot bold">Who we help</li>
                    <li className="li-item-fot"><a href="/">Startups</a></li>
                    <li className="li-item-fot"><a href="/">Small Business</a></li>
                    <li className="li-item-fot"><a href="/">Medium Business</a></li>
                    <li className="li-item-fot"><a href="/">CFO & Head of Finance</a></li>
                </ul>
                 <ul className="ul-item">
                    <li className="li-item-fot bold">Resources</li>
                    <li className="li-item-fot"><a href="/">Case Studies</a></li>
                    <li className="li-item-fot"><a href="/">Blogs</a></li>
                    <li className="li-item-fot"><a href="/">Guides</a></li>
                    <li className="li-item-fot"><a href="/">Podcasts</a></li>
                </ul>
                 <ul className="ul-item">
                    <li className="li-item-fot bold">Company</li>
                    <li className="li-item-fot"><a href="/">About Us</a></li>
                    <li className="li-item-fot"><a href="/">Careers</a></li>
                    <li className="li-item-fot"><a href="/">Contact Us</a></li>
                </ul>
                 <ul className="ul-item">
                    <li className="li-item-fot bold">Speak to us</li>
                    <li className="li-item-fot"><a href="/">Call 020 4530 8432</a></li>
                    <li className="li-item-fot"><a href="/">Refer a friend for £175</a></li>
                    <li className="li-item-fot"><a href="/">Partner with us</a></li>
                </ul>
            </div>
            <div className="fot-bot">
                <div className="bot-text">
                    <p>© Accountancy Cloud 2021</p>
                    <p>Privacy Policy & Cookies</p>
                    <p>Terms of Service</p>
                </div>
                <div className="bot-text2"><img src={Botimg} alt="" /></div>
            </div>
        </div>
    </footer>
  )
}

export default Footer