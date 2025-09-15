import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeNav, setActiveNav] = useState(
    localStorage.getItem("activeNav") || "/"
  );

  const location = useLocation();

  const handleMenuBar = () => {
    setIsActive(!isActive);
  };

  const handleNavClick = (path) => {
    setActiveNav(path);
    localStorage.setItem("activeNav", path);
    setIsActive(false); // close menu after selection
  };

  // Keep sync with current route (if user navigates manually or refresh)
  useEffect(() => {
    setActiveNav(location.pathname);
    localStorage.setItem("activeNav", location.pathname);
  }, [location]);

  return (
    <div className="header-main">
      <div className="container">
        <div className="header">
          <div className="logo">
            <h1>Furni.</h1>
          </div>

          {/* ✅ Fix nav dynamic class */}
          <div className={`nav ${isActive ? "activee" : "close"}`}>
            <ul>
              <li>
                <Link
                  to="/"
                  className={activeNav === "/" ? "active-nav" : ""}
                  onClick={() => handleNavClick("/")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={activeNav === "/about" ? "active-nav" : ""}
                  onClick={() => handleNavClick("/about")}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className={activeNav === "/shop" ? "active-nav" : ""}
                  onClick={() => handleNavClick("/shop")}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={activeNav === "/services" ? "active-nav" : ""}
                  onClick={() => handleNavClick("/services")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={activeNav === "/blog" ? "active-nav" : ""}
                  onClick={() => handleNavClick("/blog")}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={activeNav === "/contact" ? "active-nav" : ""}
                  onClick={() => handleNavClick("/contact")}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Menu Toggle */}
          <div className="menu-btn" onClick={handleMenuBar}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header