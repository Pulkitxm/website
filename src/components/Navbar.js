import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './components.css';
import Typewriter from './Typing';

const Navbar = (props) => {
  const [show, setshow] = useState(false)
  const location = useLocation();
  useState(()=>{
    setTimeout(()=>{
      setshow(true)
    },2000)
  })
  return (
    <div className="nav">
      <Link to="/">
        <div className="nav-pk" onClick={(e) => props.setProgress(100)}></div>
        <h1 className="Typewriter" onClick={(e) => props.setProgress(100)}>
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
                ? "active glow-on-hover"
                : "glow-on-hover"
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
                ? "active glow-on-hover"
                : "glow-on-hover"
            }
            onClick={(e) => props.setProgress(100)}
          >
            Who Am I ?
          </li>
        </Link>
        <Link draggable="false" to="/projects">
          <li
            className={
              location.pathname === "/projects"
                ? "active glow-on-hover"
                : "glow-on-hover"
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
                ? "active glow-on-hover"
                : "glow-on-hover"
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
                ? "active glow-on-hover"
                : "glow-on-hover"
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
