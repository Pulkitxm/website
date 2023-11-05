import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./components.css";
import Typewriter from "./Typing";

const Navbar = (props) => {
  const [show, setshow] = useState(false);
  const location = useLocation();
  useState(() => {
    setTimeout(() => {
      setshow(true);
    }, 2000);
  });
  return (
    <div className="nav">
      <Link to="/">
        <div className="nav-pk" onClick={(e) => props.setProgress(100)}></div>
        <h1
          className="Typewriter"
          id="name"
          onClick={(e) => props.setProgress(100)}
        >
          {!props.isloaded && show ? (
            <Typewriter text="Pulkit" speed={100} />
          ) : (
            <Typewriter text="‎" speed={100} />
          )}
        </h1>
      </Link>
      <ul className="nav-ul">
        <Link draggable="false" to="/">
          <li
              className={
              location.pathname === "/"
                ? "activeItem Item homeLi"
                : "Item homeLi"
            }
            onClick={(e) => props.setProgress(100)}
          >
            Home
          </li>
        </Link>
        <Link draggable="false" to="/about">
          <li
              className={
              location.pathname === "/about"
                ? "activeItem Item whoAmILi"
                : "Item whoAmILi"
            }
            onClick={(e) => props.setProgress(100)}
          >
            About
          </li>
        </Link>
        <Link draggable="false" to="/projects">
          <li
              className={
              location.pathname === "/projects"
                ? "activeItem Item projectsLi"
                : "Item projectsLi"
            }
            onClick={(e) => props.setProgress(100)}
          >
            Projects
          </li>
        </Link>
        <Link draggable="false" to="/resume">
          <li
              className={
              location.pathname === "/resume"
                ? "activeItem Item resumeLi"
                : "Item resumeLi"
            }
            onClick={(e) => props.setProgress(100)}
          >
            Resume
          </li>
        </Link>
        <Link draggable="false" to="/contact">
          <li
              className={
              location.pathname === "/contact"
                ? "activeItem Item contactLi"
                : "Item contactLi"
            }
            onClick={(e) => props.setProgress(100)}
          >
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
