import React, { useRef, useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectSlider = ({ projects }) => {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollToNextProject = () => {
        if (sliderRef.current) {
            const nextIndex = (currentIndex + 1) % projects.length;
            const nextProjectCard = sliderRef.current.children[nextIndex];

            if (nextProjectCard) {
                nextProjectCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                setCurrentIndex(nextIndex);
            }
        }
    };

    return (
        <div className="slider">
            <div className="slider-container" ref={sliderRef}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} scrollToNextProject={scrollToNextProject} />
                ))}
            </div>
        </div>
    );
};

export default ProjectSlider;
