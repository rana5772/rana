import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "../components/Heading";
import QnA from "@/assets/QnA.json";
import GradientButton from "../components/GradientButton";
import { useNavigate } from "react-router-dom";
import GlassBox from "../components/GlassBox";

const FAQsPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <Heading
          heading={
            <>
              <span className="md:hidden">FAQs</span>
              <span className="hidden md:inline">
                Frequently Asked Questions
              </span>
            </>
          }
        />

        <GlassBox text="More than an agency — your lifelong tech partnership." />

        <p className="text-center">
          We are more than just a service provider; we are your dedicated,
          long-term partner committed to supporting your technology needs and
          helping your business grow every step of the way.
        </p>

        <div className="mt-10 space-y-4">
          {QnA.map((item, index) => (
            <div
              key={item.id}
              // Conditional logic: If index is 0, add 'jello-horizontal'
              className={`border border-gray-200 rounded-xl overflow-hidden ${
                index === 0 ? "jello-horizontal" : ""
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full new-font flex justify-between items-center p-5 text-left bg-white/80"
              >
                <span className="font-medium text-[18px] text-gray-800">
                  {item.question}
                </span>
                <span className="text-2xl bg-gradient-to-r from-[#7FAAF2] to-[#4B5EDB] bg-clip-text text-transparent">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 text-justify bg-white/50 text-gray-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      <p className=" text-center mb-5 text-gray-800">
        Still looking for answers? Don't worry, we're here to help! If your
        question wasn't covered in our FAQs, our team is ready to dive in and
        assist you personally. Click the button below to get in touch, and we'll
        get back to you as soon as possible.
      </p>
      <GradientButton
        text="Let's Connect"
        onClick={() => navigate("/contact")}
      />
    </>
  );
};

export default FAQsPage;
