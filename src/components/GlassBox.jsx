import React from "react";

const GlassBox = ({ text = "Glass Box", my = true }) => {
  return (
    <div className="flex justify-center" data-aos="zoom-in" >
      <p
        className={`glass-dark new-font text-center px-4 py-1 shadow-2xl ${my ? "my-5" : ""}`}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default GlassBox;