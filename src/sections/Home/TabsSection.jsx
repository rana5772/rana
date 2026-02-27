import React, { useState } from "react";
import { Palette, Code, Cpu } from "lucide-react";
import Heading from "../../components/Heading";
import GlassBox from "../../components/GlassBox";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: "01",
      icon: <Palette className="w-6 h-6" />,
      title: "Design & UX",
      feature: "User-Centric Experience",
      fullDesc: "We combine aesthetic excellence with functional clarity to ensure your digital product is beautiful and effortless to navigate.",
      bullets: ["User research & persona development", "Responsive and accessible interface design", "Interactive prototyping and testing"],
    },
    {
      id: "02",
      icon: <Code className="w-6 h-6" />,
      title: "Development",
      feature: "Technical Engineering",
      fullDesc: "We turn requirements into elegant code. Our builds prioritize speed, security, and the ability to scale with your business growth.",
      bullets: ["Modern frontend and backend frameworks", "Secure API architecture and integration", "Performance optimization standards"],
    },
    {
      id: "03",
      icon: <Cpu className="w-6 h-6" />,
      title: "AI Integration",
      feature: "Smart Solutions",
      fullDesc: "Supercharge your workflow with custom AI. We help you implement smart features that automate tasks and provide actionable insights.",
      bullets: ["Custom LLM and chatbot implementation", "Automated data processing and analysis", "Predictive modeling and automation"],
    },
  ];

  return (
    <div className="mb-20">
      <Heading heading="AI integration" mt={false} />
      <p className="text-gray-600 text-center max-w-2xl mx-auto text-lg leading-relaxed">
        Before integrating AI, assess your data availability, technical stack,
        server capacity, and team skills.
      </p>
      <GlassBox text="Design → Development → AI Integration" />

      {/* Main Container - Added flex-col for mobile */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-stretch rounded-xl overflow-hidden border border-slate-100 shadow-sm">
        
        {/* Sidebar - Changed w-16 to md:w-16, added horizontal flex for mobile */}
        <div className="w-full md:w-16 bg-slate-50/50 border-b md:border-b-0 md:border-r border-slate-100 flex flex-row md:flex-col items-start md:items-center p-4 md:py-8 gap-4">
          {features.map((feature, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                className={`p-2 rounded-xl transition-all duration-300 cursor-pointer ${
                  isActive 
                  ? "blue-bg text-white shadow-lg scale-110" 
                  : "text-slate-400 hover-primary-text hover:bg-white"
                }`}
              >
                {feature.icon}
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <div className="flex-1 bg-white p-8 md:p-12 relative">
          <div key={activeTab} className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-gradient text-xs font-semibold uppercase tracking-wider">
                {features[activeTab].feature}
              </span>
            </div>

            <Heading
              heading={features[activeTab].title}
              underline={false}
              mt={false}
              align="left"
            />

            <div className="w-full h-px bg-slate-300 mb-3" />

            <p className="text-slate-500 text-base leading-relaxed mb-5 max-w-prose">
              {features[activeTab].fullDesc}
            </p>

            <ul className="space-y-3">
              {features[activeTab].bullets.map((bullet, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
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