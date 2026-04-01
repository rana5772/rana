import React from "react";

const PortfolioCard = () => {
  return (
    <div className="shadow-md overflow-hidden rounded-2xl max-w-6xl mx-auto">
      <div className="w-full bg-white/65 rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Image Section */}
        <div
          data-aos="flip-down"
          className="relative h-72 md:w-1/3 md:h-auto md:min-h-[250px] m-4 rounded-2xl flex-shrink-0 overflow-hidden bg-gray-200"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/demo.jpg')",
            }}
            role="img"
            aria-label="PORTFOLIO WEBSITE"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col justify-center flex-grow">
          <h3 className="text-4xl font-medium main-heading new-font text-gray-900 mb-2">
            PORTFOLIO WEBSITE
          </h3>

          {/* Description List */}
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

          {/* Tags Section */}
          <div className="flex flex-wrap gap-3">
            <div className="bg-emerald-300 inline-block px-3 py-1 rounded-full">
              Rs 5,000/-
            </div>
            <div className="bg-blue-300 inline-block px-3 py-1 rounded-full">
              Rs 500 extra per page
            </div>
            <div className="bg-pink-300 inline-block px-3 py-1 rounded-full">
              Project Timeline: 5 days
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
