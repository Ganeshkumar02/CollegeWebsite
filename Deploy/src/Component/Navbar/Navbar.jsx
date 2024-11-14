import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';

// import { Link } from 'react-router-dom';

import'./Navbar.css'
import { set } from 'mongoose';
const Navbar = () => {
  const [sticky, setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ?setSticky(true) : setSticky(false);
    })
  },[])
  const[mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu =() =>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky? 'dark-nav' :''}`}>
        <img src="../image/logo.webp" alt=""  className='logo'/>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><button  style={{height:"20px",width:"90px"}} className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}>
            Contact</Link></button></li>
        </ul>
        <div className='menu-icon'><i class="ri-menu-line" onClick={toggleMenu}></i></div>
    </nav>
  )
}

export default Navbar;