import React, { useEffect, useRef, useState } from "react";
import Typewriter from "../components/Typing";
import "./pages.css";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { SiAdobepremierepro } from "react-icons/si";
import {
  FaBootstrap,
  FaComputer,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaNode,
  FaPython,
  FaReacteurope,
} from "react-icons/fa6";

import LargeCard from "../components/LargeCard";
import SmallCard from "../components/SmallCard";

const Home = ({
  pageTransition,
  width,
  toploadAnimate,
  darkMode,
  baseTitle,
}) => {
  const svgRefs = useRef([]);

  const [firstLine, setFirstLine] = useState(false);
  const [secondLine, setSecondLine] = useState(false);
  const [thirdLine, setThirdLine] = useState(false);
  const params = useParams()
  useEffect(() => {
    console.log(params);
    document.title = baseTitle;
    initializeInitialPositions();
    document.addEventListener("mousemove", parallax);
    document.querySelectorAll(".img-dingle").forEach((img) => {
      img.addEventListener("contextmenu", disableRightClick);
    });
    setTimeout(() => {
      setFirstLine(true);
    }, 1000);
    setTimeout(() => {
      setSecondLine(true);
    }, 2000);
    setTimeout(() => {
      setThirdLine(true);
    }, 4000);
    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  function initializeInitialPositions() {
    svgRefs.current = document.querySelectorAll(".img-dingle");
  }

  function parallax(e) {
    svgRefs.current.forEach((svg) => {
      const movingValue = svg.getAttribute("data-value");
      const x = (e.clientX * movingValue) / 900;
      const y = (e.clientY * movingValue) / 900;

      // Update the style of the SVG component to apply the parallax effect
      svg.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  function disableRightClick(e) {
    e.preventDefault();
  }
  return (
    <motion.div
      className="home"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {width < 400 && (
        <>
          <br />
          <br />
        </>
      )}
      {width > 1100 && <div className="orange"></div>}
      {width > 800 ? (
        <LargeCard
          width={width}
          firstLine={firstLine}
          thirdLine={thirdLine}
          secondLine={secondLine}
          darkMode={darkMode}
        />
      ) : (
        <SmallCard
          width={width}
          firstLine={firstLine}
          thirdLine={thirdLine}
          secondLine={secondLine}
          toploadAnimate={toploadAnimate}
        />
      )}
      {width > 800 && (
        <div className="subtext" style={{ zIndex: 1 }}>
          <Link
            to="/about"
            onClick={() => toploadAnimate()}
            className="subtext-text"
          >
            <h2>know more about me</h2>
          </Link>
        </div>
      )}
      {width > 0 ? (
        <div className="imgs">
          <SiAdobepremierepro
            ref={(svgRef) => svgRefs.current.push(svgRef)}
            className="img-dingle"
            style={{
              color: !darkMode ? "#000" : "#fff",
              height: "50px",
              width: "50px",
            }}
            data-value="-4"
          />
          <FaBootstrap
            ref={(svgRef) => svgRefs.current.push(svgRef)}
            className="img-dingle"
            style={{
              color: !darkMode ? "#000" : "#fff",
              height: "50px",
              width: "50px",
            }}
            data-value="6"
          />
          <FaComputer
            ref={(svgRef) => svgRefs.current.push(svgRef)}
            className="img-dingle"
            style={{
              color: !darkMode ? "#000" : "#fff",
              height: "50px",
              width: "50px",
            }}
            data-value="4"
          />
          <FaCss3Alt
            ref={(svgRef) => svgRefs.current.push(svgRef)}
            className="img-dingle"
            style={{
              color: !darkMode ? "#000" : "#fff",
              height: "50px",
              width: "50px",
            }}
            data-value="-6"
          />
          <FaHtml5
            ref={(svgRef) => svgRefs.current.push(svgRef)}
            className="img-dingle"
            style={{
              color: !darkMode ? "#000" : "#fff",
              height: "50px",
              width: "50px",
            }}
            data-value="8"
          />
          <FaJava
            ref={(svgRef) => svgRefs.current.push(svgRef)}
            className="img-dingle"
            style={{
              color: !darkMode ? "#000" : "#fff",
              height: "50px",
              width: "50px",
            }}
            data-value="-4"
          />
          <FaNode
            ref={(svgRef) => svgRefs.current.push(svgRef)}
            className="img-dingle"
            style={{
              color: !darkMode ? "#000" : "#fff",
              height: "50px",
              width: "50px",
            }}
            data-value="5"
          />
          <FaPython
            ref={(svgRef) => svgRefs.current.push(svgRef)}
            className="img-dingle"
            style={{
              color: !darkMode ? "#000" : "#fff",
              height: "50px",
              width: "50px",
            }}
            data-value="-9"
          />
          <FaReacteurope
            ref={(svgRef) => svgRefs.current.push(svgRef)}
            className="img-dingle"
            style={{
              color: !darkMode ? "#000" : "#fff",
              height: "50px",
              width: "50px",
            }}
            data-value="-5"
          />
        </div>
      ) : (
        <></>
      )}
      {width < 400 && (
        <>
          <br />
          <br />
        </>
      )}
    </motion.div>
  );
};

export default Home;
