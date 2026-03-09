import { useState } from 'react';
import React from 'react'
import { FaPhoneAlt,FaBars ,FaTimes } from "react-icons/fa";
import Button  from './Button';

const Navbar = () => {

  const [isMenuOpen , setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed-top p-3 w-100 d-flex justify-content-center ">
        <div className="glass-nav d-flex justify-content-between align-items-center px-4 py-2">
            {/* Logo section */}
            <div className='fw-bold fs-5' style={{color: '#1B4D3E', fontFamily: 'var(--font-heading)'}}>
              Great Chalkboard Co.
            </div>
            {/* Links section */}
            <div className='d-none d-md-flex align-items-center gap-4'>
              <a href="#" className="nav-link ">Home</a>
              <a href="#" className="nav-link ">About</a>
              <a href="#" className="nav-link ">Shop</a>
              <a href="#" className="nav-link ">Terms</a>
            </div>
            {/* Call info */}
            <div className='d-none d-md-block'>
            <Button
              text = "Call for Info"
              variant = "primary"
              icon = {<FaPhoneAlt/>}
              />
            </div>

            <div className='d-md-none fs-4' style={{cursor: 'pointer' , color: '#1B4D3E'}} onClick ={()=>setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes/> : <FaBars />}
            </div>

            {isMenuOpen && (
              <div 
            className="d-md-none position-absolute w-90 glass-nav d-flex flex-column align-items-center py-4 gap-3" 
            style={{ top: '80px', left: '5%', right: '5%' }}
          >
              <a href="#" className="nav-link ">Home</a>
              <a href="#" className="nav-link">About</a>
              <a href="#" className="nav-link">Shop</a>
              <a href="#" className="nav-link">Terms</a>
              <Button text="Call for Info" variant="primary" icon={<FaPhoneAlt/>} />
          </div>
            )}
            
        </div>
    </nav>
  )
}

export default Navbar