import React from "react";
import ReactPlayer from "react-player/lazy";

import { FaAngleDown } from "react-icons/fa6";

const ProjectCard = ({ project, scrollToNextProject }) => {
  return (
    <div className="card_box">
      <div className="card_vid">
        <ReactPlayer url={"https://www.youtube.com/embed/" + project.vidCode} />
      </div>
      <div className="card_item">
        <div className="card_title">{project.title}</div>

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
      <FaAngleDown className="scrollNext" onClick={scrollToNextProject} />
    </div>
  );
};

export default ProjectCard;
