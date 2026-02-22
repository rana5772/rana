import React from "react";
import Heading from "../../components/Heading";
import GlassBox from "../../components/GlassBox";

const timelineData = [
  {
    id: 1,
    displayNumber: "1",
    title: "PLANNING",
    content:
      "The first step involves defining the project's goals, target audience, and site map. We conduct thorough research and gather all necessary requirements to create a solid roadmap.",
    color: "timeline-step-1",
  },
  {
    id: 2,
    displayNumber: "2",
    title: "DESIGN",
    content:
      "In this phase, we focus on the visual layout and user experience. We create wireframes and high-fidelity mockups to ensure the design is both aesthetic and functional.",
    color: "timeline-step-2",
  },
  {
    id: 3,
    displayNumber: "3",
    title: "LAUNCH",
    content:
      "After rigorous testing and quality assurance, we deploy the website to the live server. We ensure everything is perfectly configured for a smooth user experience.",
    color: "timeline-step-3",
  },
  {
    id: 4,
    displayNumber: "4",
    title: "SEO",
    content:
      "Post-launch, we optimize the site for search engines. This includes on-page SEO, speed optimization, and meta tag adjustments to improve visibility and ranking.",
    color: "timeline-step-4",
  },
  {
    id: 5,
    displayNumber: "5",
    title: "MAINTENANCE",
    content:
      "We provide ongoing support and updates to keep the website secure and up-to-date. Regular backups and performance monitoring are part of our maintenance package.",
    color: "timeline-step-5",
  },
];

const TimelineSection = () => {
  return (
    <div className="text-slate-800 lg:mt-0 mt-16 mb-20 overflow-x-hidden">
      <Heading
        underline={false}
        mt={false}
        heading="How We Bring Your Vision to Life"
      />

      <p className="para text-center">
        <span>
          From the first blueprint to the final pixel, we follow a structured
          path to ensure your project's success.
        </span>
        <br />
        <span className="md:block hidden">
          Our comprehensive approach combines strategic planning with technical
          excellence to deliver results that last.
        </span>
      </p>

      <GlassBox text="Strengthen Your Brand Identity" />

      <div className="max-w-[1000px] mt-5 mx-auto">
        {/* The Vertical Line */}
        <div className="relative border-l-4 border-gray-400/50 ml-8 pl-12 space-y-10">
          {timelineData.map((item, index) => (
            <div key={item.id} className="relative">
              {/* Number Circle (Static) */}
              <div
                className={`absolute -left-[74px] top-1 w-[50px] h-[50px] rounded-full flex items-center justify-center z-10 ${item.color} text-white font-bold text-xl`}
              >
                {item.displayNumber}
              </div>

              <div
                className="bg-white border border-gray-100 rounded-md p-5 relative 
                before:content-[''] before:absolute before:top-4 before:-left-2 
                before:w-4 before:h-4 before:bg-white before:border-l before:border-b before:border-gray-100 before:rotate-45 shadow-sm"
              >
                {/* Badge Title */}
                <div className="mb-4">
                  <span
                    className={`${item.color} new-font px-2 py-1 rounded-sm text-white tracking-tighter`}
                  >
                    {item.title}
                  </span>
                </div>

                {/* Content */}
                <p className="font-normal leading-relaxed text-slate-600">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
