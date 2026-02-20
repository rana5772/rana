import React, { useState } from "react";
import { ChevronDown, ChevronRight, Palette, Code, Cpu } from "lucide-react";
import Heading from "../../components/Heading";
import Glass from "flyonui/utilities/glass";
import GlassBox from "../../components/GlassBox";
import { div } from "framer-motion/client";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: "01",
      icon: <Palette className="w-6 h-6" />,
      title: "Design & UX",
      feature: "User-Centric Experience",
      shortDesc: "Crafting intuitive interfaces that prioritize user needs.",
      fullDesc:
        "We combine aesthetic excellence with functional clarity to ensure your digital product is beautiful and effortless to navigate.",
      bullets: [
        "User research & persona development",
        "Responsive and accessible interface design",
        "Interactive prototyping and testing",
      ],
    },
    {
      id: "02",
      icon: <Code className="w-6 h-6" />,
      title: "Development",
      feature: "Technical Engineering",
      shortDesc: "Building robust, scalable, and high-performance solutions.",
      fullDesc:
        "We turn requirements into elegant code. Our builds prioritize speed, security, and the ability to scale with your business growth.",
      bullets: [
        "Modern frontend and backend frameworks",
        "Secure API architecture and integration",
        "Performance optimization standards",
      ],
    },
    {
      id: "03",
      icon: <Cpu className="w-6 h-6" />,
      title: "AI Integration",
      feature: "Smart Solutions",
      shortDesc: "Leveraging machine learning to boost efficiency.",
      fullDesc:
        "Supercharge your workflow with custom AI. We help you implement smart features that automate tasks and provide actionable insights.",
      bullets: [
        "Custom LLM and chatbot implementation",
        "Automated data processing and analysis",
        "Predictive modeling and automation",
      ],
    },
  ];

  return (
    <div className="mb-20">
      <Heading heading="AI integration" mt={false} />
      <p className="text-gray-600 text-center max-w-2xl mx-auto text-lg leading-relaxed">
        Before integrating AI, assess your data availability, technical stack,
        server capacity, and team skills. This will help you choose the right AI
        tool and ensure a successful integration.
      </p>
      <GlassBox text="Design → Development → AI Integration" />

      <div className="flex flex-col md:flex-row gap-5 max-w-6xl mx-auto items-stretch">
        {/* Sidebar Tabs */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          {features.map((feature, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                className={`group text-left p-6 rounded-md transition-all border border-slate-100 cursor-pointer 
                ${isActive ? "bg-white shadow-md" : "bg-white/50 "}`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg transition-colors duration-300
                  ${
                    isActive
                      ? "blue-bg text-white"
                      : "text-blue-800 group-hover:bg-white"
                  }`}
                  >
                    {feature.icon}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-black new-font font-medium text-lg transition-colors duration-300">
                        {feature.title}
                      </h3>
                      {isActive ? (
                        <ChevronDown className="text-blue-600 w-5 h-5" />
                      ) : (
                        <ChevronRight className="text-slate-300 w-5 h-5 group-hover:text-blue-400 transition-transform group-hover:translate-x-1" />
                      )}
                    </div>

                    <div
                      className={`grid transition-all duration-300 overflow-hidden ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100 mt-2"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p className="text-sm leading-relaxed text-slate-500 overflow-hidden">
                        {feature.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Content Card */}
        <div className="w-full md:w-2/3 bg-white rounded-xl p-8 shadow-sm border border-slate-100 relative flex flex-col overflow-hidden">
          {/* Pagination Dots - Moved to Top Right */}
          <div className="absolute top-8 right-8 flex gap-1.5">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer 
                ${activeTab === i ? "w-6 blue-bg" : "w-1.5 bg-slate-200 hover:bg-slate-300"}`}
              />
            ))}
          </div>

          <div
            key={activeTab}
            className="animate-in fade-in slide-in-from-right-4 duration-500"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="p-2 rounded-lg bg-blue-600/10 text-blue-600">
                {features[activeTab].icon}
              </span>
              <span className="blue-text text-xs font-semibold uppercase tracking-wider">
                {features[activeTab].feature}
              </span>
            </div>

            <Heading
              heading={features[activeTab].title}
              underline={false}
              mt={false}
              align="left"
            />

            <p className="text-slate-500 text-base leading-relaxed mb-6 max-w-prose">
              {features[activeTab].fullDesc}
            </p>

            <ul className="space-y-3">
              {features[activeTab].bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-slate-700"
                >
                  <div className="w-1.5 h-1.5 rounded-full blue-bg" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsSection;
