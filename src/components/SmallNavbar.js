import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./smallNav.css";

const SmallNavbar = (props) => {
  const location = useLocation();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const buttonRef = useRef(null);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.addEventListener("click", handleNavCollapse);
    }
  }, []);

  const closeNavMenu = () => {
    setIsNavCollapsed(true);
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${props.darkMode ? "dark-sm-nav" : "light-sm-nav"}`}
      style={{
        width: "88%",
        color: "#fff",
        margin: "auto",
        zIndex: "1000",
      }}
    >
      <div className="container-fluid">
        <button
          ref={buttonRef}
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#fff",
          }}
        >
          <RxHamburgerMenu
            style={{
              color: "#000",
              backgroundColor: "#fff",
              zIndex: "5",
              fontSize: "1.5rem",
            }}
          />
        </button>
        <div
          className={`collapse  navbar-collapse ${
            isNavCollapsed ? "collapse" : "show"
          }`}
          id="navbarSupportedContent"
        >
          <ul className="nav-ul navbar-nav me-auto mb-2 mb-lg-0 w-100">
            <Link
              draggable="false"
              to="/"
              onClick={() => {
                closeNavMenu();
                props.toploadAnimate();
              }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <li
                className={
                  location.pathname === "/"
                    ? "activeItem Item whoAmILi"
                    : "Item whoAmILi"
                }
              >
                Home
              </li>
            </Link>
            <Link
              draggable="false"
              to="/about"
              onClick={() => {
                closeNavMenu();
                props.toploadAnimate();
              }}
            >
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
            <Link
              draggable="false"
              to="/projects"
              onClick={() => {
                closeNavMenu();
                props.toploadAnimate();
              }}
            >
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
            <Link
              draggable="false"
              to="/resume"
              onClick={() => {
                closeNavMenu();
                props.toploadAnimate();
              }}
            >
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
            <Link
              draggable="false"
              to="/contact"
              onClick={() => {
                closeNavMenu();
                props.toploadAnimate();
              }}
            >
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
            <li>
              <h1>
                <input
                  type="checkbox"
                  className="btn-check"
                  id="btn-check-outlined"
                  autoComplete="off"
                />
                <div
                  className="center"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <div class="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onClick={() => {
                        const currMode = !props.darkMode;
                        props.setDarkMode(currMode);
                        window.localStorage.setItem("darkMode", currMode);
                      }}
                    />
                    <label
                      class="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                      style={{
                        fontWeight: "900",
                        textShadow: "none",
                        color: props.darkMode ? "#272727" : "#fff",
                      }}
                    >
                      Dark Mode
                    </label>
                  </div>
                </div>
              </h1>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SmallNavbar;
