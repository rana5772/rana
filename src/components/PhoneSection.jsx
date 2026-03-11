import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { MdSignalCellular3Bar } from "react-icons/md";
import Heading from "./Heading";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";
import { FiPlusSquare } from "react-icons/fi";

const PhoneSection = ({
  name = "Website Name",
  link = "#",
  description = "A brief description of the website goes here.",
  points = ["Point 1", "Point 2", "Point 3", "Point 4", "Point 5"],
  side = 2, // 1 for Left, 2 for Right
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Determine order based on side prop
  const visualOrder = side === 1 ? "md:order-1" : "md:order-2";
  const contentOrder = side === 1 ? "md:order-2" : "md:order-1";

  return (
    <section className="mb-20 grid bg-black/10 backdrop-blur-xl shadow-xl grid-cols-1 md:grid-cols-2 min-h-[600px] w-full items-stretch rounded-lg overflow-hidden">
      {/* Visual Side */}
      <div
        className={`flex items-center justify-center py-12 order-1 ${visualOrder} relative`}
      >
        <div className="relative w-[260px] h-[520px] bg-black rounded-[30px] shadow-2xl p-2">
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-xl z-10"></div>

          <div className="w-full h-full bg-white rounded-[22px] overflow-hidden flex flex-col">
            <div className="h-8 bg-gray-100 flex items-center justify-between px-2 text-xs">
              <span>{format(currentTime, "h:mm a")}</span>
              <span className="select-none">
                <MdSignalCellular3Bar className="inline mr-1" />
                🔋
              </span>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-4">
              <div className="w-16 h-16 text-white flex justify-center items-center font-semibold text-3xl gradient-bg rounded-2xl">
                {name.charAt(0)}
              </div>
              <h3 className="font-semibold text-lg text-center mt-2">{name}</h3>
              <p className="text-gray-500 text-center text-sm">{description}</p>
              <a
                href={link}
                className="gradient-bg mt-3 text-white px-4 py-2 rounded-lg text-sm"
              >
                Open
              </a>
            </div>

            <div className="flex justify-center pb-2">
              <div className="w-20 h-1.5 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div
        className={`flex flex-col bg-white justify-center px-6 py-12 md:px-16 lg:px-24 order-2 ${contentOrder}`}
      >
        <div className="max-w-xl">
          <Heading heading={name} mt={false} align="left" />
          <p className="text-lg mb-5 text-slate-600">{description}</p>
          <div className="text-lg text-slate-600 leading-relaxed mb-10">
            <ul className="list-gradient-bullet">
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-5 w-full items-center">
            <a
              href={link}
              className="w-full sm:w-auto px-8 py-3 rounded-full flex justify-center items-center gap-3 hover:scale-105 gradient-bg text-white transition-all shadow-lg"
            >
              Visit Now <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneSection;
