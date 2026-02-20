import React from "react";
import { TypeAnimation } from "react-type-animation";

const Typewriter = () => {
  return (
    <TypeAnimation
      sequence={[
        "Fullstack Development",
        1000,
        "Website Development",
        1000,
        "App Development",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default Typewriter;
