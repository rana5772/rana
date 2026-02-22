import React from "react";
import { motion } from "framer-motion";

const GlassBox = ({ text = "Glass Box", my = true }) => {
  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-40px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p
        className={`glass-dark new-font text-center px-4 py-1 shadow-2xl ${my ? "my-5" : ""}`}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </motion.div>
  );
};

export default GlassBox;
