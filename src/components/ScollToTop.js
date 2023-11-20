import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [scrollPosition, setScrollPosition] = useState(false);
  const projectsDiv = document.querySelector(".projects");
  if (projectsDiv) {
    projectsDiv.addEventListener("scroll", () => {
      if (projectsDiv.scrollTop > 0) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
    });
  }
  return (
    <div
      className="scroll-to-top scrollToTop"
      >
      <FaAngleUp
        style={{ opacity: scrollPosition ? '1' : '0', transition: 'opacity .3s',cursor:!scrollPosition?'default' : 'pointer' }}
        onClick={() => {
          if (projectsDiv) {
            projectsDiv.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        }}
        />
    </div>
  );
};

export default ScrollToTopButton;
