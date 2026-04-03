import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PortfolioCard = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  const progressItems = [
    { label: "Project Success", value: 95, delay: 0 },
    { label: "Design Quality", value: 98, delay: 0.2 },
    { label: "Client Satisfaction", value: 100, delay: 0.4 },
  ];

  return (
    <div
      className="shadow-md overflow-hidden rounded-2xl max-w-6xl mx-auto"
      ref={ref}
    >
      <div className="w-full bg-white/65 rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Progress Bars Section */}
        <div className="relative md:w-1/3 md:h-auto  m-4 rounded-2xl flex-shrink-0 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
          <div className="w-full new-font px-6 py-4 space-y-6">
            {progressItems.map((item) => (
              <div key={item.label}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">
                    {item.label}
                  </span>
                  <span className="text-sm text-gray-700">{item.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div
                    key={`bar-${inView}`}
                    className="blue-bg h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={
                      inView ? { width: `${item.value}%` } : { width: 0 }
                    }
                    transition={{
                      duration: 1,
                      delay: item.delay,
                      ease: "easeOut",
                    }}
                  >
                    <div className="h-full w-full animate-pulse bg-white/20"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col justify-center flex-grow">
          <h3 className="text-4xl font-medium main-heading new-font text-gray-900 mb-2">
            PORTFOLIO WEBSITE
          </h3>
          <div className="text-gray-600 mb-4">
            <ul className="list-disc ml-5 space-y-1">
              <li>
                High speed and SEO ready business website with responsive design
                aimed to convert visitors into loyal customers.
              </li>
              <li>
                Best for agencies, consultants, doctors, lawyers, or startups.
              </li>
              <li>
                Lightning-fast load speed and Google Search Console setup to
                track traffic.
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="bg-gradient-to-r from-emerald-400 to-emerald-500 inline-block px-4 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Rs 5,000/-
            </button>
            <button className="bg-gradient-to-r from-blue-400 to-blue-500 inline-block px-4 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Rs 500 extra per page
            </button>
            <button className="bg-gradient-to-r from-pink-400 to-pink-500 inline-block px-4 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
              Project Timeline: 5 days
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
