import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import LargeNavbar from "./components/LargeNavbar";
import SmallNavbar from "./components/SmallNavbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [width, setwidth] = useState(window.innerWidth);
  useEffect(() => {
    if (window.localStorage.darkMode && window.localStorage.darkMode == "true")
      setDarkMode(true);
  }, []);
  useEffect(() => {
    let root = document.getElementById("root");
    if (root)
      root.style.backgroundColor = darkMode == true ? "#272727" : "#fff";
  }, [darkMode]);
  useEffect(() => {
    toploadAnimate();
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      window.onload = null;
    };
  }, []);
  const handleResize = () => {
    setwidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  const toploadAnimate = () => {
    let percs = [
      [10, 20, 30],
      [40, 50, 60],
      [70, 80, 90],
    ];
    setProgress(5);
    let random;
    setTimeout(() => {
      random = Math.floor(Math.random() * 3);
      setProgress(percs[0][random]);
    }, 250);
    setTimeout(() => {
      random = Math.floor(Math.random() * 3);
      setProgress(percs[1][random]);
    }, 500);
    setTimeout(() => {
      random = Math.floor(Math.random() * 3);
      setProgress(percs[2][random]);
    }, 750);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
  };
  return (
    <>
      <Router
        style={{
          oveflowX: "hidden",
        }}
      >
        <LoadingBar
          color={width < 1400 ? "red" : "#c8c8c8"}
          progress={progress}
          height={width > 1400 ? 8 : 4}
          onLoaderFinished={() => setProgress(0)}
          style={{
            zIndex: 1000,
          }}
        />
        <div className="navContained">
          {width > 1400 ? (
            <LargeNavbar
              isloaded={loading}
              toploadAnimate={toploadAnimate}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            />
          ) : (
            <SmallNavbar
              isloaded={loading}
              toploadAnimate={toploadAnimate}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            />
          )}
        </div>
        <div className={`contentofpulkit ${darkMode ? "darkContent" : ""}`}>
          <AnimatedRoutes
            width={width}
            toploadAnimate={toploadAnimate}
            darkMode={darkMode}
          />
        </div>
      </Router>
    </>
  );
};

export default App;
