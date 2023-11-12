import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import LargeNavbar from "./components/LargeNavbar";
import SmallNavbar from "./components/SmallNavbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import LoadingBar from "react-top-loading-bar";
import axios from "axios";
const App = () => {
  const backendBaseUrl = "https://portfolio-backend-ecru-one.vercel.app";
  const [respSent, setrespSent] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [width, setwidth] = useState(window.innerWidth);
  const [referedFrom, setReferedFrom] = useState('')
  const baseTitle = "Pulkit";
  const [title, setTitle] = useState(baseTitle);
  const [isFetchedData, setIsFetchedData] = useState(false)
  const [addData, setAddData] = useState(null)
  useEffect(() => {
    const backendBaseUrl = "https://portfolio-backend-ecru-one.vercel.app";
    // Check and set dark mode if it's stored in localStorage
    if (
      window.localStorage.darkMode &&
      window.localStorage.darkMode === "true"
    ) {
      setDarkMode(true);
    }
  }, []);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://geolocation-db.com/json/");
      setAddData(res.data);
    };
    if (!isFetchedData) {
      setIsFetchedData(true)
      getData();
    }
    const userInformation = {
      isOnline: navigator.onLine,
      connectionType: navigator.connection
        ? navigator.connection.effectiveType
        : "unknown",
      language: navigator.language,
      platform: navigator.platform,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      referringUrl: referedFrom,
      currentUrl: window.location.href,
      dateTime: new Date(Date.now()),
    };
    const sendUserDataToBackend = async (data) => {
      data.ip = data["IPv4"];
      delete data.IPv4;
      try {
        const response = await axios.post(
          backendBaseUrl + "/api/users",
          data,
        );
      } catch (error) {
        console.error("Error storing user data:", error);
      }
    };
    if (addData==null) {
      getData()
    }
    // if (addData!=null && !respSent && !window.location.href.includes("localhost") ) {
    if (addData!=null && !respSent) {
      if (referedFrom != '') {
        sendUserDataToBackend({ ...userInformation, ...addData });
        setrespSent(true);
      }
    }
  }, [referedFrom,addData, []]);

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
            setrespSent={setrespSent}
            setReferedFrom={setReferedFrom}
          />
        </div>
      </Router>
    </>
  );
};

export default App;
