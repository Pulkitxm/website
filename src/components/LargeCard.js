import React from "react";
import Typewriter from "./Typing";

import "./LargeCard.css";

const Card = ({firstLine,thirdLine,width,secondLine}) => {
  return (
    <div
      className="card"
    >
      <p>
        <span className="spani">
          {"01"} <span className="spanarr"> {"<"}</span>
        </span>
        {firstLine && <Typewriter text="Hi! I am Pulkit" speed={50} />}
        <span className="spani">
          <span className="spanarr"> {">"}</span>
        </span>
      </p>
      <p>
        <span className="spani">
          {"02"} <span className="spanarr"> {"<"}</span>
        </span>
        {secondLine && (
          <Typewriter text="I am a Full Stack Developer," speed={50} />
        )}
        <span className="spani">
          <span className="spanarr"> {">"}</span>
        </span>
      </p>
      <p>
        <span className="spani">
          {"03"} <span className="spanarr"> {"<"}</span>
        </span>
        {thirdLine && (
          <Typewriter text="Video Editor and Tech. Enthusiast" speed={50} />
        )}
        <span className="spani">
          <span className="spanarr"> {">"}</span>
        </span>
      </p>
    </div>
  );
};

export default Card;
