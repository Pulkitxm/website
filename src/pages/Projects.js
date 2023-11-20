import React, { useEffect, useRef } from "react";
import ScrollToTop from "../components/ScollToTop";
import ProjectSlider from "../components/ProjectSlider";
import "./pages.css";
import { motion } from "framer-motion";
import { FaAnglesUp } from "react-icons/fa6";
import star from "../assets/starss.svg";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import axios from "axios";

const Projects = ({
  pageTransition,
  width,
  darkMode,
  toploadAnimate,
  baseTitle,
  backendBaseUrl,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showgenre, setshowgenre] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const [singleProject, setSingleProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const genres = [
    {
      showText: "All",
      value: "all",
    },
    {
      showText: "Major Projects",
      value: "major",
    },
    {
      showText: "Minor Projects",
      value: "minor",
    },
    {
      showText: "HTML  ",
      value: "html",
    },
    {
      showText: "css",
      value: "css",
    },
    {
      showText: "js",
      value: "js",
    },
    {
      showText: "ReactJs",
      value: "reactjs",
    },
    {
      showText: "ExpressJs",
      value: "expressjs",
    },
    {
      showText: "NodeJs",
      value: "nodejs",
    },
    {
      showText: "MongoDB",
      value: "mongodb",
    },
    {
      showText: "JWT",
      value: "jwt",
    },
    {
      showText: "APIs",
      value: "fetch api",
    },
    {
      showText: "Extensions",
      value: "extensions",
    },
    {
      showText: "Editing",
      value: "editing",
    },
  ];
  useEffect(() => {
    if (!params.id) {
      document.title = baseTitle + " | Projects";
      setshowgenre("all");
    } else {
      const project = projects.filter((i) => i.id === params.id)[0];
      if (project) {
        setSingleProject(project);
        document.title = `${baseTitle} | Project-${project.title}`;
      } else {
        setSingleProject("error");
      }
    }
    const getData = async () => {
      const res = await axios.get((backendBaseUrl + "/api/projects"));
      setTimeout(() => {
      setProjects(res.data);
      }, 2000);
    };
    if (!isFetched) {
      setIsFetched(true);
        getData();
    }
  }, []);
  if (singleProject === "error") {
    return <NotFound />;
  } else {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className="projects"
      >
        {width < 400 && (
          <>
            <br />
            <br />
          </>
        )}
        <div
          style={{
            height: "100%",
          }}
        >
          {!singleProject && (
            <div
              className="top"
              style={{
                fontSize: width < 400 ? "1.5rem" : "2rem",
                color: darkMode ? "#fff" : "#000",
              }}
            >
              Projects I made &nbsp;{" "}
              {!darkMode && <img src={star} alt="star" />}
            </div>
          )}
          {!params.id && (
            <div className="genres">
              <ul>
                {genres.map((genre) => (
                  <li key={genre.value}>
                    <button
                      className={showgenre === genre.value ? "selected" : ""}
                      onClick={() => {
                        setCurrentIndex(
                          genre.value == showgenre ? currentIndex : 0,
                        );
                        setshowgenre(genre.value);
                        navigate("/projects");
                      }}
                    >
                      {genre.showText}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {params.id && showgenre == null ? (
            <ProjectSlider
              projects={projects.filter((i) => i.id === params.id)}
              showgenre={showgenre}
              setshowgenre={setshowgenre}
              darkMode={darkMode}
              toploadAnimate={toploadAnimate}
              seperate={true}
              setCurrentIndex={setCurrentIndex}
              currentIndex={currentIndex}
            />
          ) : (
            <ProjectSlider
              projects={projects.filter((i) => i.genre.includes(showgenre))}
              showgenre={showgenre}
              setshowgenre={setshowgenre}
              darkMode={darkMode}
              toploadAnimate={toploadAnimate}
              setCurrentIndex={setCurrentIndex}
              currentIndex={currentIndex}
            />
          )}
        </div>
        {width < 400 && (
          <>
            <br />
            <br />
          </>
        )}
      </motion.div>
    );
  }
};

export default Projects;
