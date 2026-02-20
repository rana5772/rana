import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";
import Heading from "../../components/Heading";
import GlassBox from "../../components/GlassBox";

const ImagesSection = () => {
  const imageColumns = [
    [
      { src: "/images/illustrations/1.png", alt: "laptop" },
      { src: "/images/illustrations/4.png", alt: "computer" },
    ],
    [
      { src: "/images/illustrations/2.png", alt: "deal" },
      { src: "/images/illustrations/5.png", alt: "phone" },
    ],
    [{ src: "/images/illustrations/3.png", alt: "e-commerce" }],
  ];

  // Animation Variants
  const columnVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15, // Staggered delay for each column
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  const getColumnStyles = (index) => {
    switch (index) {
      case 0: return "pt-20";
      case 1: return "";
      case 2: return "pt-40 hidden sm:block";
      default: return "";
    }
  };

  return (
    <section className="relative overflow-hidden ">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-x-12">
          
          {/* Left Content (Static) */}
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start">
            <Heading heading="We're a tech-partnership" underline={false} mt={false} />
            <div className="flex justify-center lg:justify-start w-full">
              <GlassBox my={false} text="Not an AGENCY" />
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600 mb-5">
              Beyond the launch, we are your long-term allies. We provide a
              lifetime of dedicated support and zero-cost maintenance to keep
              your operations running flawlessly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 w-full items-center">
              <Link to="/faqs" className="w-full sm:w-auto px-8 py-3 rounded-full flex justify-center items-center gap-3 hover:scale-105 bg-gradient-to-r from-[#7FAAF2] to-[#4B5EDB] text-white transition-all shadow-lg">
                Know More <FaArrowRight />
              </Link>
              <Link to="/contact" className="glass-dark w-full sm:w-auto flex justify-center items-center gap-3 px-8 py-3 rounded-md transition-all cursor-pointer border border-gray-200">
                <span className="font-[350] whitespace-nowrap">Let's Connect</span>
                <RiMailSendFill className="text-xl" />
              </Link>
            </div>
          </div>

          {/* Right Image Grid (Animated Every Time) */}
          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
            {imageColumns.map((column, colIdx) => (
              <motion.div
                key={colIdx}
                custom={colIdx}
                initial="hidden"
                whileInView="visible"
                // Change once to false to re-trigger animation
                viewport={{ once: false, amount: 0.2 }} 
                variants={columnVariants}
                className={`space-y-4 lg:space-y-6 ${getColumnStyles(colIdx)}`}
              >
                {column.map((image, imgIdx) => (
                  <motion.div
                    key={imgIdx}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative overflow-hidden rounded-xl shadow-lg"
                  >
                    <img
                      className="aspect-[2/3] w-full object-cover"
                      src={image.src}
                      alt={image.alt}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ))}

            <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-purple-100 blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagesSection;