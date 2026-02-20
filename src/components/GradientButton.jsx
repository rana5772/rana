import React from "react";
import { FaArrowRight } from "react-icons/fa";

const GradientButton = ({ text = "Button", onClick, fullWidth = false }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-3
        rounded-full
        flex justify-center items-center gap-3
        hover:scale-105
        bg-gradient-to-r from-[#7FAAF2] to-[#4B5EDB]
        text-white transition-all
        ${fullWidth ? "w-full" : "w-max mx-auto"}
      `}
    >
      {text} <FaArrowRight />
    </button>
  );
};

export default GradientButton;