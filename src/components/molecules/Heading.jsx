import React from "react";
import "../organs.css";

const Heading = ({
  emoji = "",      // New Prop for emoji
  heading = "Heading",
  mt = true,
  underline = true,
  align = "center",
}) => {
  const alignmentMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  const alignmentClass = alignmentMap[align] || "text-center";

  return (
    <div className={`${alignmentClass} font-medium`}>
      <h1
        className={`
          relative inline-block text-5xl mb-5 
          ${underline ? "animated-underline" : ""} 
          ${mt ? "mt-20" : ""}
        `}
      >
        {/* Emoji is outside the gradient span */}
        {emoji && <span className="mr-2">{emoji}</span>}
        
        {/* Only the text gets the gradient class */}
        <span className="main-heading">{heading}</span>
      </h1>
    </div>
  );
};

export default Heading;