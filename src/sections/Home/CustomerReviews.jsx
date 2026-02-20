import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Heading from "../../components/Heading";
import GlassBox from "../../components/GlassBox";

const testimonials = [
  {
    id: 1,
    name: "Arjun Mehta",
    text: "The implementation was flawless. Our team's productivity increased by 40% within the first month of using this platform.",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQEaRovQLzuTTg/profile-displayphoto-scale_400_400/B56ZxNuRXRJAAk-/0/1770830503332?e=1772668800&v=beta&t=YVpkY2yP4-Oxr08s-nriOEaa64GodneY2tfs1LwQfXQ",
  },
  {
    id: 2,
    name: "Priya Sharma",
    text: "The UI/UX is intuitive and beautiful. It's rare to find a tool that balances power and simplicity so effectively.",
    avatar: "https://i.pravatar.cc/150?u=3",
  },
  {
    id: 3,
    name: "Rohan Deshmukh",
    text: "This transformed how we handle client feedback. The automated workflows saved us dozens of hours every week.",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQEFKV5PlDq7qA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709476748371?e=1772668800&v=beta&t=9ySYBeC6_L2sNb-d4fawJeABC0i4UCW6pjpPyfPSONI",
  },
  {
    id: 4,
    name: "Anshul Mehra",
    text: "Exceptional support and a robust feature set. I can't imagine running our daily operations without it.",
    avatar:
      "https://media.licdn.com/dms/image/v2/C4D03AQEakYpSyyhs3g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1535720826597?e=1772668800&v=beta&t=j4_WZd_QWX1JJajNXW5zFHn0msha7QFjGj9zC4hGiJM",
  },
  {
    id: 5,
    name: "Siddharth",
    text: "The best investment we've made this year. The insights provided are deep, actionable, and easy to share.",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQH6PrG2Mas0Hw/profile-displayphoto-shrink_400_400/B56ZTNObAzGsAo-/0/1738609898638?e=1772668800&v=beta&t=yDECNiCKLFTi9z84dFBMsnlC_8jyW8IbOR64bz68hA4",
  },
];

export default function CustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(2);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  // --- Swipe Handling ---
  const handleTouchStart = (e) =>
    (touchStartX.current = e.targetTouches[0].clientX);
  const handleTouchMove = (e) =>
    (touchEndX.current = e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden px-4 font-sans">
      <Heading
        heading={
          <>
            <span className="md:hidden">Testimonials</span>
            <span className="hidden md:inline">Customer Reviews</span>
          </>
        }
      />

      <p className="para text-center">
        <span>
          These stories reflect our commitment to excellence and the long-term
          partnerships we've built along the way.
        </span>
        <br />
        <span className="md:block hidden">
          We believe our work speaks for itself, but our clients often put it
          better than we can.
        </span>
      </p>
      <GlassBox text="Love letters from our clients" />

      <div
        className="relative flex items-center justify-center h-[350px] w-full max-w-5xl touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {testimonials.map((item, index) => {
          const position = index - activeIndex;
          const isActive = index === activeIndex;

          // Logic for adjacent cards
          const isNext =
            position === 1 ||
            (activeIndex === testimonials.length - 1 && index === 0);
          const isPrev =
            position === -1 ||
            (activeIndex === 0 && index === testimonials.length - 1);

          let opacity = 0;
          let scale = 0.8;
          let translateX = 0;
          let zIndex = 0;

          if (isActive) {
            opacity = 1;
            scale = 1;
            translateX = 0;
            zIndex = 30;
          } else if (isNext) {
            opacity = 0.5;
            scale = 0.85;
            translateX = "70%";
            zIndex = 20;
          } else if (isPrev) {
            opacity = 0.5;
            scale = 0.85;
            translateX = "-70%";
            zIndex = 20;
          }

          return (
            <div
              key={item.id}
              className={`absolute w-[320px] md:w-[400px] p-8 bg-white transition-all duration-500 ease-out rounded-3xl shadow-xl border border-slate-100 select-none flex flex-col items-center text-center`}
              style={{
                transform: `translateX(${translateX}) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
              }}
              onClick={() => setActiveIndex(index)}
            >
              {/* Profile Image */}
              <div className="aspect-square h-[90px] rounded-full border-2 border-blue-50 overflow-hidden mb-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p
                className={`text-slate-800 mb-6 leading-relaxed transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}
              >
                "{item.text}"
              </p>

              <div className={isActive ? "opacity-100" : "opacity-0"}>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.name}
                </h3>
              </div>
            </div>
          );
        })}

        {/* Desktop Navigation */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute -left-12 z-40 p-3 bg-white shadow-lg rounded-full text-slate-400 hover:text-blue-600 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute -right-12 z-40 p-3 bg-white shadow-lg rounded-full text-slate-400 hover:text-blue-600 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Pagination */}
      <div className="flex gap-3 mt-5">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-2 transition-all rounded-full ${i === activeIndex ? "blue-bg w-8" : "bg-white w-2"}`}
          />
        ))}
      </div>
    </div>
  );
}
