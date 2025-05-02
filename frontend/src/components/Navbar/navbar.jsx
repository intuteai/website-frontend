import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import intuteLogo from "../../assets/intuteLogo.png";
import "./navbar.css";

const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState("navbar-transparent");
  const [isNavOpen, setIsNavOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarClass("navbar-colored");
      } else {
        setNavbarClass("navbar-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to toggle mobile menu
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Function to close navbar when a link is clicked
  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${navbarClass}`}>
      <div className="container">
        <img src={intuteLogo} alt="Intute.ai Logo" className="navbar-logo" />
        
        {/* Toggle Button for Mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-5">
              <Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link" to="/about" onClick={closeNavbar}>About Us</Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link" to="/vision" onClick={closeNavbar}>Our Vision</Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link" to="/team" onClick={closeNavbar}>Our Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeNavbar}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
