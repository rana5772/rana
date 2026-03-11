import React from "react";
import { FaArrowRight } from "react-icons/fa";

const GradientButton = ({ text = "Button", onClick, fullWidth = false }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-3 rounded-full flex justify-center items-center flex-nowrap gap-3
        hover:scale-105 gradient-bg text-white transition-all
        ${fullWidth ? "w-full" : "w-max"}
      `}
    >
      {text} <FaArrowRight />
    </button>
  );
};

export default GradientButton;
