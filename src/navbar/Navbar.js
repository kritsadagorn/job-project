import React from 'react'
import './Navbar.css';
import Logo from '../assets/Logo.png'
import togglelight from  '../assets/night-mode.png'
import usflag from '../assets/us.png'
import thflag from '../assets/thai.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='container'>
        <Link to="/">
          <img src={Logo} alt="logo" className="logo"></img>
        </Link>
        <nav>
            <ul>
              <li><Link to="/position/comeng" className='navtopic'>POSITION</Link></li>
              <li><Link to="/learn" className='navtopic'>LEARN</Link></li>
              <li><Link to="/about" className='navtopic'>ABOUT</Link></li>
            </ul>
        </nav>
      <div className='icon-box'>
          <div className='textlight-on'>Light on</div>
          <img src={togglelight} alt="ToggleLight" className='nmtoggle'/>
          <img src={usflag} alt="English" className='us'/>
          <img src={thflag} alt="Thai" className='th'/>
        </div>
    </div>
  )
}


export default Navbar;
