import React from "react";
import "./footer.css";
import { FaLinkedin, FaInstagram, FaYoutube, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../assets/startupIndia.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Left: Logo */}
      <div className="footer-left">
      <img src={logo} alt="StartupIndia Logo" className="footer-logo" />
      </div>  

      {/* Center: Quick Links + Socials */}
      <div className="footer-center">
        <div className="footer-section">
          <p className="footer-heading">Quick Links</p>
          <a href="/" className="footer-link">Home</a>
          <a href="/about" className="footer-link">About Us</a>
          <a href="/contact" className="footer-link">Contact Us</a>
        </div>

        <div className="footer-divider" />

        <div className="footer-section">
          <p className="footer-heading">Socials</p>
          <div className="footer-socials">
            <a href="https://linkedin.com/company/intute-ai-technologies-pvt-ltd" target="_blank" rel="noreferrer">
              <FaLinkedin size={25} className="social-icon" />
            </a>
            <a href="https://www.instagram.com/intute_ai?igsh=eWozcmJqM2FiZXU4&utm_source=qr" target="_blank" rel="noreferrer">
              <FaInstagram size={25} className="social-icon" />
            </a>
            <a href="https://www.youtube.com/@Intute-Ai" target="_blank" rel="noreferrer">
              <FaYoutube size={25} className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Right: Contact Info */}
      <div className="footer-right">
        <p className="footer-contact">
          <FaEnvelope size={18} /> info@intute.ai <br /><br />
          <FaMapMarkerAlt size={18} />A5, Sector-68, NOIDA - 201303 <br /> Uttar Pradesh, India
        </p>
      </div>

      {/* Bottom: Copyright */}
      <div className="footer-bottom">
        <hr />
        <p>© {new Date().getFullYear()} Intute.ai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
