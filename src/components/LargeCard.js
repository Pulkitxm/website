import React from "react";
import Typewriter from "./Typing";

import "./LargeCard.css";

const Card = ({ firstLine, thirdLine, width, secondLine, darkMode }) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: darkMode ? "rgb(76 76 76)" : "#fff",
      }}
    >
      <div>
        <span className="spani" style={{ color: darkMode ? "#fff" : "#000" }}>
          {"01"} <span className="spanarr"> {"<"}</span>
        </span>
        {firstLine && (
          <div className={`${darkMode ? "darkTypewriter" : "lightTypewriter"}`}>
            <Typewriter text="Hi! I am Pulkit" speed={50} />
          </div>
        )}
        <span className="spani">
          <span className="spanarr"> {">"}</span>
        </span>
      </div>
      <p>
        <span className="spani" style={{ color: darkMode ? "#fff" : "#000" }}>
          {"02"} <span className="spanarr"> {"<"}</span>
        </span>
        {secondLine && (
          <div className={`${darkMode ? "darkTypewriter" : "lightTypewriter"}`}>
            <Typewriter
              text="I am a Full Stack Developer,"
              style={{ color: darkMode ? "#fff" : "#000" }}
              speed={50}
            />
          </div>
        )}
        <span className="spani">
          <span className="spanarr"> {">"}</span>
        </span>
      </p>
      <p>
        <span className="spani" style={{ color: darkMode ? "#fff" : "#000" }}>
          {"03"} <span className="spanarr"> {"<"}</span>
        </span>
        {thirdLine && (
          <div className={`${darkMode ? "darkTypewriter" : "lightTypewriter"}`}>
            <Typewriter text="Video Editor and Tech. Enthusiast" speed={50} />
          </div>
        )}
        <span className="spani">
          <span className="spanarr"> {">"}</span>
        </span>
      </p>
    </div>
  );
};

export default Card;
