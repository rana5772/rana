import React from "react";

const PortfolioComponent = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Standard Website Plans
      </h2>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
          <h3 className="text-2xl font-bold text-white">
            PORTFOLIO WEBSITE - 5K
          </h3>
          <p className="text-blue-100">(upto 8 pages)</p>
        </div>
        <div className="p-6">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              High speed and SEO ready business website with responsive design
              aimed to convert visitors into loyal customers.
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Best for agencies, consultants, doctors, lawyers, or startups.
            </li>
            <li className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Lightning-fast load speed and Google Search Console setup to track
              traffic.
            </li>
          </ul>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-gray-600">
              <span className="font-semibold">NOTE:</span> Rs 500/- extra per
              page
            </p>
            <p className="text-gray-600 mt-1">
              <span className="font-semibold">Project Timeline:</span> 5 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioComponent;
