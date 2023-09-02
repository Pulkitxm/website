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

    return (
        <AnimatePresence>
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home isloaded={props.isloaded} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes