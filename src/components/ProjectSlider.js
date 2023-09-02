// ProjectSlider.js
import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';

const ProjectSlider = ({ projects }) => {
    return (
        <div className="slider">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    );
};

export default ProjectSlider;
