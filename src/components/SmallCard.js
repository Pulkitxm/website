import React, { useEffect, useState } from "react";
import Typewriter from "./Typing";

import "./SmallCard.css";
import { Link } from "react-router-dom";

const Card = ({ width, setProgress }) => {
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
          <span className="spani">
            {"01"} <span className="spanarr"> {"<"}</span>
          </span>
          {firstline && <Typewriter text="Hi! I am Pulkit" speed={50} />}
          <span className="spani">
            <span className="spanarr"> {">"}</span>
          </span>
        </p>
        <p>
          <span className="spani">
            {"02"} <span className="spanarr"> {"<"}</span>
          </span>
          {secondLine && <Typewriter text="I am a Full" speed={50} />}
          <span className="spani">
            <span className="spanarr"> {">"}</span>
          </span>
        </p>
        <p>
          <span className="spani">
            {"03"} <span className="spanarr"> {"<"}</span>
          </span>
          {thirdLine && <Typewriter text="Stack Developer," speed={50} />}
          <span className="spani">
            <span className="spanarr"> {">"}</span>
          </span>
        </p>
        <p>
          <span className="spani">
            {"04"} <span className="spanarr"> {"<"}</span>
          </span>
          {fourthline && <Typewriter text="Video Editor and" speed={50} />}
          <span className="spani">
            <span className="spanarr"> {">"}</span>
          </span>
        </p>
        <p>
          <span className="spani">
            {"05"} <span className="spanarr"> {"<"}</span>
          </span>
          {fifthline && <Typewriter text="Tech. Enthusiast" speed={50} />}
          <span className="spani">
            <span className="spanarr"> {">"}</span>
          </span>
        </p>
      </div>
      <div className="subtext-sm" style={{ zIndex: 1 }}>
        <Link
          to={"/about"}
          onClick={() => setProgress(100)}
          className="subtext-text-sm"
        >
          <h2>know more about me</h2>
        </Link>
      </div>
    </div>
  );
};

export default Card;
