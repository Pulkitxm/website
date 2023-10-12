import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';

// pages
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Resume from '../pages/Resume'
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = (props) => {
    const location = useLocation();
    const pageTransition = {
        initial: { filter: "blur(20px)" },
        animate: { filter: "blur(0px)" },
        exit: { filter: "blur(20px)" },
        transition: { duration: 1 },
      };
    return (
        <AnimatePresence>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home isloaded={props.isloaded} pageTransition={pageTransition} />} />
                <Route path="/about" element={<About pageTransition={pageTransition} />} />
                <Route path="/contact" element={<Contact pageTransition={pageTransition} />} />
                <Route path="/projects" element={<Projects pageTransition={pageTransition} />} />
                <Route path="/resume" element={<Resume pageTransition={pageTransition} />} />
                <Route path="/*" element={<NotFound pageTransition={pageTransition} />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes