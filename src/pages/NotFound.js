import React, { useEffect, useRef } from 'react';
import Typewriter from '../components/Typing';
import './pages.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import _404 from '../assets/404.gif'
const Home = ({pageTransition}) => {

  return (
    <motion.div className="notfound" initial="initial" animate="animate" exit="exit" variants={pageTransition}>
       <div className="not-found-container">
                <h1 className="not-found-heading">404 - Page Not Found</h1>
                <p className="not-found-description">
                    Oops! The page you are looking for does not exist.
                </p>
                <img
                    src={_404}
                    alt="Page Not Found"
                    className="not-found-image"
                />
                <h2 className="not-found-back-link">
                    <Link to="/">{'- Go back to the home page'}</Link>
                </h2>
            </div>
    </motion.div>
  );
};

export default Home;