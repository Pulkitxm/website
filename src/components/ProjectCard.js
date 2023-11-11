import React from "react";
import ReactPlayer from "react-player/lazy";

import { FaAngleDown } from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";
import { ImEnlarge } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({
  project,
  scrollToNextProject,
  toploadAnimate,
  showNext,
  seperate,
  darkMode,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="card_box"
      style={{
        boxShadow: `15px 15px ${
          darkMode ? "50px #ffffff30" : "200px #00000080"
        }`,
      }}
    >
      <div className="card_vid">
        <ReactPlayer url={"https://www.youtube.com/embed/" + project.vidCode} />
      </div>
      <div className="card_item">
        <div className="card_title">
          {project.title}
          <button
            id="copy"
            style={{
              color: "#fff",
            }}
            onClick={(e) => {
              e.target.innerText = "Copied!";
              const url = `https://devpulkit.vercel.app/projects/${project.id}`;
              navigator.clipboard.writeText(url);
            }}
          >
            <FaRegCopy />
          </button>
          {!seperate && (
            <button
              id="copy"
              style={{
                color: "#fff",
              }}
              onClick={(e) => {
                toploadAnimate();
                navigate(`/projects/${project.id}`);
              }}
            >
              <ImEnlarge />
            </button>
          )}
        </div>

        <br />
        <div className="card_data">
          link - &nbsp;
          <span className="card_item__link">
            <a
              href={project.link}
              target="_blank"
              style={{ color: "orange", textDecoration: "underline" }}
            >
              {project.linkText}{" "}
            </a>
          </span>
          <br />
          <br />
          Skills - &nbsp;
          <span className="card_item_skills">
            <p style={{ color: "rgb(133, 255, 108)", display: "inline" }}>
              {project.skills}
            </p>
          </span>
          <br />
          <br />
          <span>{project.desc}</span>
        </div>
      </div>
      {showNext && (
        <FaAngleDown className="scrollNext" onClick={scrollToNextProject} />
      )}
    </div>
  );
};

export default ProjectCard;
