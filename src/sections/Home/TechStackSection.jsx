import React from "react";
import Heading from "../../components/Heading";
import { SiExpress, SiMongodb, SiNodedotjs, SiReact } from "react-icons/si";
import { RiNodejsFill } from "react-icons/ri";
import TabsSection from "./TabsSection";
import GlassBox from "../../components/GlassBox";
import MarqueeSection from "./MarqueeSection";

const TechStackSection = () => {
  // Tech stack data for the table
  const techStack = [
    {
      name: "MongoDB",
      icon: (
        <SiMongodb
          className="text-2xl"
          aria-label="MongoDB"
          role="img"
        />
      ),
      bgColor: "bg-emerald-400",
      description:
        "A scalable NoSQL database designed for high-performance data storage and flexible schema management.",
    },
    {
      name: "Express.js",
      icon: (
        <SiExpress
          className="text-2xl"
          aria-label="Express.js"
          role="img"
        />
      ),
      bgColor: "bg-gray-300",
      description:
        "A streamlined server-side framework that handles API routing and middleware integration with minimal overhead.",
    },
    {
      name: "React.js",
      icon: (
        <SiReact
          className="text-2xl"
          aria-label="React.js"
          role="img"
        />
      ),
      bgColor: "bg-sky-300",
      description:
        "A component-based frontend library used to build high-performance, reactive user interfaces that update without page refreshes.",
    },
    {
      name: "Node.js",
      icon: (
        <RiNodejsFill
          className="text-2xl"
          aria-label="Node.js"
          role="img"
        />
      ),
      bgColor: "bg-green-500",
      description:
        "A high-efficiency JavaScript runtime that enables the execution of scalable, event-driven backend services.",
    },
  ];

  return (
    <section className="w-full">
      <Heading heading="Tech-Stack used" />

      {/* FIXED: Changed <p> to <div> to avoid hydration errors */}
      <div className="para text-[20px] md:text-3xl flex flex-col justify-center items-center new-font text-center">
        <div className="flex items-center gap-4 text-4xl">
          <SiMongodb
            className="text-emerald-500"
            aria-label="MongoDB"
            role="img"
          />
          <SiExpress
            aria-label="Express.js"
            role="img"
          />
          <SiReact
            className="primary-text-muted"
            aria-label="React.js"
            role="img"
          />
          <SiNodedotjs
            className="text-green-600"
            aria-label="Node.js"
            role="img"
          />
        </div>
      </div>

      <GlassBox text="MongoDB +Express.js + React.jsx + Node.js = <br /> <span class='text-3xl'>MERN stack</span>" />

      {/* <TabsSection /> */}

      <div className="mx-auto mb-10 overflow-hidden border border-gray-600 rounded-xl shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 font-sans">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className={`p-6 transition-all bg-white/50 hover:bg-white border-b border-gray-600 last:border-b-0 lg:[&:nth-last-child(-n+2)]:border-b-0 ${index % 2 === 0 ? "lg:border-r lg:border-gray-600" : ""
                }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`p-2 rounded ${tech.bgColor}`}>
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-lg text-slate-700">
                  {tech.name}
                </h3>
              </div>
              <p className="text-sm text-slate-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>

      <MarqueeSection />
    </section>
  );
};

export default TechStackSection;