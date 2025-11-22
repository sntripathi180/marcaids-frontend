import React, { useState } from 'react';
import "./Navbar.css";
import { Link, NavLink } from 'react-router-dom';
import logoo_main from "../assets/logoo_main.png";
//import styles from './Navbar.module.css';
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggles menuc on hamburger click
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
   
      <nav className="navbar">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logoo_main} alt="Logo" className="navbar-logo-img"/>
        </Link>

        {/* Search bar */}
        <div className="searchbarr">
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input"
          />
        </div>

        {/* Hamburger icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" onClick={toggleMenu}>HOME</NavLink></li>
          <li><NavLink to="/services" onClick={toggleMenu}>OUR SERVICES</NavLink></li>
          
          <li><NavLink to="/testimonials" onClick={toggleMenu}>TESTIMONIALS</NavLink></li>
          <li><NavLink to="/blog" onClick={toggleMenu}>BLOG</NavLink></li>
         
          <li><NavLink to="/contact" onClick={toggleMenu}>CONTACT</NavLink></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
