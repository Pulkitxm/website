// Typewriter.js

import React, { useEffect, useState } from "react";

const Typewriter = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentText = "";
    let index = 0;

    const type = () => {
      if (index < text.length) {
        currentText += text[index];
        setDisplayText(currentText);
        index++;
        setTimeout(type, speed);
      }
    };

    type();

    // Cleanup function
    return () => {
      clearTimeout(type);
    };
  }, [text, speed]);

  return <span className="">{displayText}</span>;
};

export default Typewriter;
