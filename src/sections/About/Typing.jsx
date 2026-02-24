import React from "react";
import { TypeAnimation } from "react-type-animation";

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        "Website Development",
        1000,
        "Application Development",
        1000,
        "Graphic Designing",
        1000,
        "SEO & Digital Marketing",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ display: "inline-block", textAlign: "center" }}
      repeat={Infinity}
    />
  );
};

export default Typing;
