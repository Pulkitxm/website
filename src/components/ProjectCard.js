import ReactPlayer from 'react-player/youtube'
import newtab from '../assets/newtab.png'
import React from 'react';
const ProjectCard = ({ project,scrollToNextProject }) => {
  return (
    <div className="card_box">
      <div className="card_vid">
        <iframe width="560" height="715" src={"https://www.youtube.com/embed/" + project.vidCode+"?controls=0"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
      </div>
      <div className="card_item">

        <div className="card_title">
          {project.title}
        </div>

        <br />
        <div className="card_data">
          link - &nbsp;
          <span className="card_item__link">
            <a href={project.link} target='_blank' style={{ color: 'orange', textDecoration: 'underline' }} >{project.linkText}  </a>
          </span>
          <br />
          <br />
          Skills - &nbsp;
          <span className="card_item_skills">
            <p style={{ color: 'rgb(133, 255, 108)', display: 'inline' }} >{project.skills}</p>
          </span>
          <br />
          <br />
          <span >
            {project.desc}
          </span>
        </div>
      </div>
      <div className="button-container">
          <button className='scrollNext' onClick={scrollToNextProject}>{"Next ->"}</button>
      </div>
    </div>
  );
};

export default ProjectCard;
