import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import LargeNavbar from "./components/LargeNavbar";
import SmallNavbar from "./components/SmallNavbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import LoadingBar from "react-top-loading-bar";
import axios from "axios";
const App = () => {
  const backendBaseUrl =
    "https://portfolio-backend-ecru-one.vercel.app";
  const [respSent, setrespSent] = useState(false);
  const [IP, setIP] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [width, setwidth] = useState(window.innerWidth);
  const baseTitle = "Pulkit";
  const [title, setTitle] = useState(baseTitle);
  useEffect(() => {
    const backendBaseUrl =
    "https://portfolio-backend-ecru-one.vercel.app";
    // Check and set dark mode if it's stored in localStorage
    if (
      window.localStorage.darkMode &&
      window.localStorage.darkMode === "true"
    ) {
      setDarkMode(true);
    }
    const getIp = async () => {
      try {
        const response = await axios.get(backendBaseUrl + "/api/getIpOfUser");
        if (response.data.ip) setIP(response.data.ip);
      } catch (error) {
        console.error("Error storing user data:", error);
      }
    };
    getIp();
  }, []);
  useEffect(() => {
    const additionalUserInformation = {
      // Browser information
      browserName: navigator.appName,
      browserVersion: navigator.appVersion,
      userAgentFull: navigator.userAgent,

      // Screen size and color depth
      screenAvailWidth: window.screen.availWidth,
      screenAvailHeight: window.screen.availHeight,

      // Window size
      windowInnerWidth: window.innerWidth,
      windowInnerHeight: window.innerHeight,

      // Device information
      deviceType: getDeviceType(), // You can define a function to determine device type

      // Connection information
      isOnline: navigator.onLine,

      // Performance information
      connectionType: navigator.connection
        ? navigator.connection.effectiveType
        : "unknown",

      // Battery information (if available)
      batteryLevel: navigator.getBattery
        ? navigator.getBattery().then((battery) => battery.level)
        : "unknown",
    };
    const userInformation = {
      ...additionalUserInformation,
      ip: IP,
      // Include the information you already collected
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      colorDepth: window.screen.colorDepth,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      cookiesEnabled: navigator.cookieEnabled,
      doNotTrack: navigator.doNotTrack,
      referringUrl: document.referrer,
      currentUrl: window.location.href,
    };
    const sendUserDataToBackend = async () => {
      try {
        const response = await axios.post(
          backendBaseUrl + "/api/users",
          userInformation,
        );
      } catch (error) {
        console.error("Error storing user data:", error);
      }
    };
    if (!respSent && !window.location.href.includes("localhost")) {
      if (IP) {
        sendUserDataToBackend();
        setrespSent(true);
      }
    }
  }, [IP,[]]);

  function getDeviceType() {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes("mobile") || userAgent.includes("tablet")) {
      return "mobile";
    } else if (userAgent.includes("desktop")) {
      return "desktop";
    } else {
      return "unknown";
    }
  }

  useEffect(() => {
    window.title = title;
  }, [title]);
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
            baseTitle={baseTitle}
            setTitle={setTitle}
          />
        </div>
      </Router>
    </>
  );
};

export default App;
