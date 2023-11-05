import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./smallNav.css";

const SmallNavbar = (props) => {
  const location = useLocation();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNavMenu = () => {
    setIsNavCollapsed(true);
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary nav-sm-screen"
      style={{
        width: "88%",
        backgroundColor: "#fff",
        margin: "auto",
        zIndex: "1000",
        position: "absolute",
      }}
    >
      <div className="container-fluid w-100">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`}
          id="navbarSupportedContent"
        >
          <ul className="nav-ul navbar-nav me-auto mb-2 mb-lg-0 w-100">
            <Link draggable="false" to="/" onClick={closeNavMenu}>
              <li
                className={
                  location.pathname === "/"
                    ? "activeItem Item homeLi"
                    : "Item homeLi"
                }
              >
                Home
              </li>
            </Link>
            <Link draggable="false" to="/about" onClick={closeNavMenu}>
              <li
                className={
                  location.pathname === "/about"
                    ? "activeItem Item whoAmILi"
                    : "Item whoAmILi"
                }
              >
                About
              </li>
            </Link>
            <Link draggable="false" to="/projects" onClick={closeNavMenu}>
              <li
                className={
                  location.pathname === "/projects"
                    ? "activeItem Item projectsLi"
                    : "Item projectsLi"
                }
              >
                Projects
              </li>
            </Link>
            <Link draggable="false" to="/resume" onClick={closeNavMenu}>
              <li
                className={
                  location.pathname === "/resume"
                    ? "activeItem Item resumeLi"
                    : "Item resumeLi"
                }
              >
                Resume
              </li>
            </Link>
            <Link draggable="false" to="/contact" onClick={closeNavMenu}>
              <li
                className={
                  location.pathname === "/contact"
                    ? "activeItem Item contactLi"
                    : "Item contactLi"
                }
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SmallNavbar;
