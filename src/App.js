import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import LargeNavbar from "./components/LargeNavbar";
import SmallNavbar from "./components/SmallNavbar";
import emailjs from "emailjs-com"; // Import the EmailJS library
import AnimatedRoutes from "./components/AnimatedRoutes";
import LoadingBar from "react-top-loading-bar";
import axios from "axios";
import { m } from "framer-motion";
const App = () => {
  const backendBaseUrl = "https://portfolio-backend-ecru-one.vercel.app";
  const [respSent, setrespSent] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [width, setwidth] = useState(window.innerWidth);
  const [referedFrom, setReferedFrom] = useState("");
  const baseTitle = "Pulkit";
  const [title, setTitle] = useState(baseTitle);
  const [isFetchedData, setIsFetchedData] = useState(false);
  const [addData, setAddData] = useState(null);
  const [counter, setCounter] = useState(false);
  const [projects, setProjects] = useState([]);
  const [modeView, setModeView] = useState("default");
  const [isFetched, setIsFetched] = useState(false);
  useEffect(() => {
    if (
      window.localStorage.darkMode &&
      window.localStorage.darkMode === "true"
    ) {
      setDarkMode(true);
    }
    const getData = async () => {
      const res = await axios.get(backendBaseUrl + "/api/projects");
      setProjects(res.data);
    };
    if (!isFetched) {
      setIsFetched(true);
      getData();
    }
  }, []);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://geolocation-db.com/json/");
      setAddData(res.data);
    };
    if (!isFetchedData) {
      setIsFetchedData(true);
      getData();
    }
    const date = JSON.stringify(new Date(Date.now()).toLocaleString());
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
      dateTime: date.substring(1, date.length - 1),
    };
    const sendUserDataToBackend = async (userInformation, addData) => {
      addData.ip = addData["IPv4"];
      delete addData.IPv4;
      if (!respSent && modeView != "dev" && !process.env.NODE_ENV=="development") {
        if (!counter) {
           const data = { ...userInformation, ...addData };
           try {
             const response = await axios.post(
               backendBaseUrl + "/api/users",
               data,
               );
               setrespSent(true);
               //  const serviceId = "service_d8jslwj";
               //  const templateId = "template_4ejfcep";
               //  const userId = "vgn5g8Coo7AD1lJKP";
               //  const templateParams = { ...userInformation, ...addData };
               // emailjs
             //   .send(serviceId, templateId, templateParams, userId)
             //   .then((response) => {
             //     setrespSent(true);
             //   }, 5000);
            } catch (error) {
              console.error("Error storing user data:", error);
            } 
         }
        } else {
          console.log("Admin Device Detected");
          console.log({ ...userInformation, ...addData });
          setrespSent(true);
        }
      };
      if (addData == null) {
      getData();
    }
    if (
      !respSent &&
      addData != null
      // && !window.location.href.includes("localhost")
    ) {
      if (referedFrom != "") {
        sendUserDataToBackend(userInformation, addData).then(
          () => setrespSent(true),
          setCounter(true),
        );
      }
    }
  }, [referedFrom, addData, []]);

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
            backendBaseUrl={backendBaseUrl}
            width={width}
            toploadAnimate={toploadAnimate}
            darkMode={darkMode}
            baseTitle={baseTitle}
            setTitle={setTitle}
            setrespSent={setrespSent}
            setReferedFrom={setReferedFrom}
            setModeView={setModeView}
            projects={projects}
            setProjects={setProjects}
          />
        </div>
      </Router>
    </>
  );
};

export default App;
