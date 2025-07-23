import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";
// import { Link } from "react-router-dom";
import "./Footer.css";
import { HashLink as Link } from 'react-router-hash-link';

export default function Footer() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer">

      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">Deep Tech</h2>
            <p className="footer-tagline">
              Transforming education through innovative technology solutions
            </p>
            <div className="footer-social">
              <a href="#" target="_blank" className="social-icon" aria-label="Facebook">
                <FaFacebookF />
                <span className="social-tooltip">Facebook</span>
              </a>
              <a href="#" target="_blank" className="social-icon" aria-label="Instagram">
                <FaInstagram />
                <span className="social-tooltip">Instagram</span>
              </a>
              <a href="#" target="_blank" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
                <span className="social-tooltip">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="footer-grid">
            {/* quick link   */}
            <div className="footer-column">
              <h3 className="footer-title">
                Quick Links <span className="title-underline"></span>
              </h3>
              <ul className="footer-links">
                <li>
                  <Link to="/#Home">
                    <FaChevronRight className="link-icon" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link smooth to="/#about">
                    <FaChevronRight className="link-icon" />
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link smooth to="/#project">
                    <FaChevronRight className="link-icon" />
                    <span>Work</span>
                  </Link>
                </li>
                <li>
                  <Link smooth to="/#contact">
                    <FaChevronRight className="link-icon" />
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* services  */}
            <div className="footer-column">
              <h3 className="footer-title">
                Services <span className="title-underline"></span>
              </h3>
              <ul className="footer-links">
                <li>
                  <Link smooth to="/#service">
                    <FaChevronRight className="link-icon" />
                    <span>Web Development</span>
                  </Link>
                </li>
                <li>
                  <Link smooth to="/#service">
                    <FaChevronRight className="link-icon" />
                    <span>Mobile Apps</span>
                  </Link>
                </li>
                <li>
                  <Link smooth to="/#service">
                    <FaChevronRight className="link-icon" />
                    <span>Graphic Designing</span>
                  </Link>
                </li>
                <li>
                  <Link smooth to="/#service">
                    <FaChevronRight className="link-icon" />
                    <span>Digital Marketing</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* contact  */}
            <div className="footer-column">
              <h3 className="footer-title"> Contact <span className="title-underline"></span>
              </h3>
              <ul className="footer-links">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <p>Noida, Uttar Pradesh, India</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="contact-text">
                    <Link style={{ textDecoration: 'none' }} to='tel:+9187070 87926'>  <p>+91 87070 87926</p> </Link>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">

                    <Link style={{ textDecoration: 'none' }} to='mailto:khushboopanday05@gmail.com'>  <p>khushboopanday05@gmail.com</p> </Link>
                  </div>
                </div>
              </ul>
            </div>

            {/* <div className="footer-column contact-column">
              <h3 className="footer-title">
                Contact Us <span className="title-underline"></span>
              </h3>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>Noida, Uttar Pradesh, India</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+91 87070 87926</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>khushboopanday05@gmail.com</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            {/* <Link to="/cookie-policy">Cookie Policy</Link> */}
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Deep Tech. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
