import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => setIsNavOpen(!isNavOpen);
  const closeNavbar = () => setIsNavOpen(false);

  return (
    <nav className={`navbar navbar-expand-lg ${navbarClass}`}>
      <div className="container">
        <NavLink to="/" onClick={closeNavbar}>
          <img src={intuteLogo} alt="Intute.ai Logo" className="navbar-logo" />
        </NavLink>

        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/vision", label: "Our Vision" },
              { to: "/team", label: "Our Team" },
              { to: "/api/contact", label: "Contact" }
            ].map(({ to, label }) => (
              <li className="nav-item me-5" key={to}>
                <NavLink
                  to={to}
                  onClick={closeNavbar}
                  className={({ isActive }) => `nav-link${isActive ? " active-link" : ""}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
