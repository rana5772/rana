import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
const laptop = "/images/laptop.png";
import Typewriter from "./Typewriter";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";
import Loader from "./Loader";

function LaptopSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const touchStartPos = useRef(0);
  const minSwipeDistance = 50;

  const slides = [
    { title: "e-commerce", icon: "bi-cart", text: "Sell your products online" },
    {
      title: "Blogs",
      icon: "bi-search",
      text: "Blogs for better SEO performance",
    },
    {
      title: "Courses",
      icon: "bi-book",
      text: "Launch & Sell your online courses",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const goToSlide = (index) => setCurrentSlide(index);

  const handleStart = (clientX) => {
    touchStartPos.current = clientX;
  };

  const handleEnd = (clientX) => {
    const distance = touchStartPos.current - clientX;
    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section>
      {!isImageLoaded && <Loader />}

      <div
        className={`max-w-6xl mt-20 mx-auto px-4 sm:px-6 relative transition-opacity duration-500 ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="animated-header font-architects-daughter">
              <span className="md:text-3xl text-2xl font-medium text-gray-700">
                We specialize in
              </span>
            </h1>
            <div className="mt-2 main-heading text-gray-800 font-semibold new-font mb-8">
              <div className="md:text-5xl text-3xl">
                <Typewriter />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-5 w-full items-center">
              <Link
                to="/projects"
                className="w-full sm:w-auto px-8 py-3 rounded-full flex justify-center items-center gap-3 hover:scale-105 bg-gradient-to-r from-[#7FAAF2] to-[#4B5EDB] text-white transition-all shadow-lg"
              >
                View Projects <FaArrowRight />
              </Link>
              <Link
                to="/contact"
                id="round"
                className="glass-dark w-full sm:w-auto flex justify-center items-center gap-3 px-8 py-3 rounded-md transition-all cursor-pointer"
              >
                <span className="font-[350] whitespace-nowrap">
                  Let's Connect
                </span>
                <RiMailSendFill className="text-xl" />
              </Link>
            </div>
          </div>

          <div
            className="relative flex justify-center items-center order-1 lg:order-2"
            onTouchStart={(e) => handleStart(e.targetTouches[0].clientX)}
            onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseUp={(e) => handleEnd(e.clientX)}
          >
            <div className="laptop relative overflow-hidden">
              <img
                src={laptop}
                draggable="false"
                className="select-none"
                alt="Laptop"
                onLoad={() => setIsImageLoaded(true)}
              />
              <div
                id="slide"
                className="absolute select-none inset-0 flex flex-col items-center justify-evenly pb-3 text-center overflow-hidden text-xl text-blue-800 bg-white transition-opacity duration-1000 ease-in-out"
              >
                <h3 className="sm:text-4xl text-2xl new-font blue-text">
                  {slides[currentSlide].title}
                </h3>
                <i
                  className={`bi blue-text ${slides[currentSlide].icon} text-5xl sm:text-6xl`}
                ></i>
                <div className="sm:text-xl text-[15px] new-font blue-text font-[450]">
                  {slides[currentSlide].text}
                </div>
              </div>
            </div>

            {/* Next/Prev Buttons - Responsive & Styled */}
            <button
              onClick={prevSlide}
              className="hidden lg:flex absolute text-xl select-none h-10 w-10 justify-center items-center left-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800/40 hover:bg-gray-800 p-2 rounded-full transition-all shadow-md"
            >
              <MdSkipPrevious />
            </button>
            <button
              onClick={nextSlide}
              className="hidden lg:flex absolute text-xl select-none h-10 w-10 justify-center items-center right-4 top-1/2 transform -translate-y-1/2 text-white bg-gray-800/40 hover:bg-gray-800 p-2 rounded-full transition-all shadow-md"
            >
              <MdSkipNext />
            </button>

            {/* Indicator Dots */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-8 h-3 rounded-full transition-all ${currentSlide === index ? "blue-bg" : "bg-gray-700"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LaptopSection;
