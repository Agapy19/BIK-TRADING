import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; 

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={process.env.PUBLIC_URL + '/Images/logobik.jpg'} alt="BIK TRADING SARL" className="logo-img" />
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isMenuOpen ? 'hamburger-menu open' : 'hamburger-menu'}></div>
          <div className={isMenuOpen ? 'hamburger-menu open' : 'hamburger-menu'}></div>
          <div className={isMenuOpen ? 'hamburger-menu open' : 'hamburger-menu'}></div>
        </div>

        <ul className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={closeMenu}>
              What we do
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
