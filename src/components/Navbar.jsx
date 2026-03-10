import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // React Router se NavLink import kiya
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import Button from './Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Yeh function active link ko style dene ke liye hai
  const navLinkClass = ({ isActive }) => isActive ? "nav-link active-link" : "nav-link";

  return (
    // Z-index zaroori hai taake navbar hamesha page ke upar rahay
    <nav className="fixed-top p-3 w-100 d-flex justify-content-center" style={{ zIndex: 1050 }}>
        <div className="glass-nav d-flex justify-content-between align-items-center px-4 py-2 w-100">
            
            {/* Logo section */}
            <div className='fw-bold fs-5' style={{color: '#1B4D3E', fontFamily: 'var(--font-heading)'}}>
              Great Chalkboard Co.
            </div>
            
            {/* ================= Desktop Links ================= */}
            <div className='d-none d-md-flex align-items-center gap-4'>
              <NavLink to="/" className={navLinkClass}>Home</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
              <NavLink to="/shop" className={navLinkClass}>Shop</NavLink>
              <NavLink to="/terms" className={navLinkClass}>Terms</NavLink>
            </div>
            
            {/* Call info */}
            <div className='d-none d-md-block'>
              <Button text="Call for Info" variant="primary" icon={<FaPhoneAlt/>} />
            </div>

            {/* Hamburger Icon */}
            <div className='d-md-none fs-4' style={{cursor: 'pointer' , color: '#1B4D3E'}} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes/> : <FaBars />}
            </div>

            {/* ================= Mobile Menu ================= */}
            {isMenuOpen && (
              <div 
                className="d-md-none position-absolute glass-nav d-flex flex-column align-items-center py-4 gap-3" 
                style={{ top: '80px', left: '5%', right: '5%', width: '90%' }}
              >
                {/* Click karne par menu band (false) ho jayega */}
                <NavLink to="/" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                <NavLink to="/about" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>About</NavLink>
                <NavLink to="/shop" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Shop</NavLink>
                <NavLink to="/terms" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Terms</NavLink>
                
                <Button text="Call for Info" variant="primary" icon={<FaPhoneAlt/>} />
              </div>
            )}
            
        </div>
    </nav>
  )
}

export default Navbar;