import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './components.css';
import Typewriter from './Typing';

const Navbar = (props) => {
  const location = useLocation();

  return (
    <div className='nav'>
      <Link to='/'>
        <div className="nav-pk"></div>
        <h1 className='Typewriter' >
          {!props.isloaded ? <Typewriter text="Pulkit" speed={100} /> : <Typewriter text=" " speed={100} />}
        </h1>
      </Link>
      <ul className='nav-ul'>
        <Link draggable='false' to='/'>
          <li className={location.pathname === '/' ? 'active glow-on-hover' : 'glow-on-hover'}>
            Home
          </li>
        </Link>
        <Link draggable='false' to='/about'>
          <li className={location.pathname === '/about' ? 'active glow-on-hover' : 'glow-on-hover'}>
            Who Am I ?
          </li>
        </Link>
        <Link draggable='false' to='/projects'>
          <li className={location.pathname === '/projects' ? 'active glow-on-hover' : 'glow-on-hover'}>
            Projects
          </li>
        </Link>
        <Link draggable='false' to='/resume'>
          <li className={location.pathname === '/resume' ? 'active glow-on-hover' : 'glow-on-hover'}>
            Resume
          </li>
        </Link>
        <Link draggable='false' to='/contact'>
          <li className={location.pathname === '/contact' ? 'active glow-on-hover' : 'glow-on-hover'}>
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
