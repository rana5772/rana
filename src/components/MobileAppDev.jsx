import React from "react";

const features = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "TechStack: React Native",
    description:
      "Cross-Platform: One app that works on both iPhone and Android (compatible for both Android and iOS)",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    title: "Easy Updates",
    description:
      "The ability to update the product list easily using admin panel.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Real-Time Updates",
    description:
      "Using a live database ensures that when you change a price or a product goes out of stock, it updates for everyone instantly.",
  },
];

const MobileAppDev = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Mobile App Development
      </h2>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
        <p className="text-3xl font-bold text-center text-blue-600 mb-6">
          Starting from 16K
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-5 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-4">
          <span className="font-semibold">Project Timeline:</span> 2 weeks
        </p>
      </div>
    </section>
  );
};

export default MobileAppDev;
