import React, { useState, useEffect } from 'react';
import { Menu, X, Code, ChevronDown } from 'lucide-react';
import './Navbar.css';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../assets/Logo/5.png'

const Navbar = ({ onLoginClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">

        {/* logo  */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* hamburger  */}
        <div className={`navbar-mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        {/* nav tabs  */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link smooth to="/#Home" className={`nav-link  ${isScrolled ? 'scrolled' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link smooth to="/#about" className={`nav-link  ${isScrolled ? 'scrolled' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link smooth to="/#service" className={`nav-link  ${isScrolled ? 'scrolled' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link smooth to="/#project" className={`nav-link  ${isScrolled ? 'scrolled' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Work</Link>
         
          <Link to="/#contact" >
            <button
              className="sign-in-button"
            >
              Contact
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
