import React, { useEffect, useState } from "react";
import Typewriter from "./Typing";

import "./SmallCard.css";
import { Link } from "react-router-dom";

const Card = ({ width, toploadAnimate }) => {
  const [firstline, setfirstline] = useState(false);
  const [secondLine, setsecondLine] = useState(false);
  const [thirdLine, setthirdLine] = useState(false);
  const [fourthline, setfourthline] = useState(false);
  const [fifthline, setfifthline] = useState(false);
  useEffect(() => {
    {
      setTimeout(() => {
        setfirstline(true);
      }, 1000);
      setTimeout(() => {
        setsecondLine(true);
      }, 2000);
      setTimeout(() => {
        setthirdLine(true);
      }, 3000);
      setTimeout(() => {
        setfourthline(true);
      }, 4000);
      setTimeout(() => {
        setfifthline(true);
      }, 5000);
    }
  });
  return (
    <div className="smContainer">
      <div className="card-sm">
        <p>
          <span className="spani" id='white'>
            {"01"} <span className="spanarr"> {"<"}</span>
          </span>
          <div id="white" style={{ display: "inline" }}>
            {firstline && <Typewriter text="Hi! I am Pulkit" speed={50} />}
          </div>
          <span className="spani">
            <span className="spanarr"> {">"}</span>
          </span>
        </p>
        <p>
          <span className="spani" id='white'>
            {"02"} <span className="spanarr"> {"<"}</span>
          </span>
          <div id="white" style={{ display: "inline" }}>
            {secondLine && <Typewriter text="I am a Full" speed={50} />}
          </div>
          <span className="spani">
            <span className="spanarr"> {">"}</span>
          </span>
        </p>
        <p>
          <span className="spani" id='white'>
            {"03"} <span className="spanarr"> {"<"}</span>
          </span>
          <div id="white" style={{ display: "inline" }}>
            {thirdLine && <Typewriter text="Stack Developer," speed={50} />}
          </div>
          <span className="spani">
            <span className="spanarr"> {">"}</span>
          </span>
        </p>
        <p>
          <span className="spani" id='white'>
            {"04"} <span className="spanarr"> {"<"}</span>
          </span>
          <div id="white" style={{ display: "inline" }}>
            {fourthline && <Typewriter text="Video Editor and" speed={50} />}
          </div>
          <span className="spani">
            <span className="spanarr"> {">"}</span>
          </span>
        </p>
        <p>
          <span className="spani" id='white'>
            {"05"} <span className="spanarr"> {"<"}</span>
          </span>
          <div id="white" style={{ display: "inline" }}>
            {fifthline && <Typewriter text="Tech. Enthusiast" speed={50} />}
          </div>
          <span className="spani">
            <span className="spanarr"> {">"}</span>
          </span>
        </p>
      </div>
      <div className="subtext-sm" style={{ zIndex: 1 }}>
        <Link
          draggable="false"
          to={"/about"}
          onClick={() => toploadAnimate()}
          className="subtext-text-sm"
        >
          <div id="white" style={{ display: "inline" }}>
            <h2>know more about me</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
