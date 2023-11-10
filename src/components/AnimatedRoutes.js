import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// pages
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = (props) => {
  const location = useLocation();
 const pageTransition = {
   initial: { x: "-100%", opacity: 0 },
   animate: { x: "0%", opacity: 1 },
   exit: { x: "100%", opacity: 0 },
   transition: { duration: 1 },
 };


  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={
            <Home
              width={props.width}
              isloaded={props.isloaded}
              pageTransition={pageTransition}
              toploadAnimate={props.toploadAnimate}
              darkMode={props.darkMode}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              width={props.width}
              pageTransition={pageTransition}
              toploadAnimate={props.toploadAnimate}
              darkMode={props.darkMode}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              width={props.width}
              pageTransition={pageTransition}
              toploadAnimate={props.toploadAnimate}
              darkMode={props.darkMode}
            />
          }
        />
        <Route
          path="/projects"
          element={
            <Projects
              pageTransition={pageTransition}
              width={props.width}
              toploadAnimate={props.toploadAnimate}
              darkMode={props.darkMode}
            />
          }
        />
        <Route
          path="/resume"
          element={
            <Resume
              width={props.width}
              pageTransition={pageTransition}
              toploadAnimate={props.toploadAnimate}
              darkMode={props.darkMode}
            />
          }
        />
        <Route
          path="/*"
          element={
            <NotFound
              pageTransition={pageTransition}
              toploadAnimate={props.toploadAnimate}
              darkMode={props.darkMode}
            />
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
