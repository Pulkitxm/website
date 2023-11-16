import React, { useRef, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Spinner from "./Spinner";
import "./ProjectSlider.css";

const ProjectSlider = ({
  projects,
  darkMode,
  toploadAnimate,
  separate,
  currentIndex,
  setCurrentIndex,
}) => {
  const sliderRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false)
  useEffect(() => {
    setIsComplete(currentIndex >= projects.length)
  },[currentIndex])
  const loadMoreProjects = () => {
    setLoading(true);
    setTimeout(() => {
      const newProjects = Array.from({ length: 3 }, (_, index) => ({
        id: projects.length + index + 1,
        title: `New Project ${projects.length + index + 1}`,
      }));
      setCurrentIndex((prevIndex) =>
        prevIndex >= projects.length
          ? prevIndex
          : prevIndex + newProjects.length,
      );
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          loadMoreProjects();
        }
      },
      { threshold: 0.5 },
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current.lastElementChild);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current.lastElementChild);
      }
    };
  }, [projects, loadMoreProjects, loading]);

  return (
    <div className="slider">
      <div className="slider-container" ref={sliderRef}>
        {projects.slice(0, currentIndex).map((project, index) => {
          return (
            <ProjectCard
              key={index}
              project={project}
              darkMode={darkMode}
              toploadAnimate={toploadAnimate}
              showNext={projects.length > 1}
              separate={separate}
            />
          );
        })}
        {!isComplete && loading && (
          <div
            className="loading-animation"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner/>
          </div>
        )}
        <div style={{ height: "5em", opacity: 0 }} />
      </div>
    </div>
  );
};

export default ProjectSlider;
