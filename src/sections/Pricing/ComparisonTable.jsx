import React, { useState, useEffect } from "react";
import Heading from "../../components/Heading";
import { FiCheck, FiX, FiInfo } from "react-icons/fi";
import comparisonData from "./comparisonData.json";

const ComparisonTable = () => {
  const [selectedPlan, setSelectedPlan] = useState("starter");
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load data from JSON file
    setFeatures(comparisonData.features);
    setLoading(false);
  }, []);

  const renderValue = (value) => {
    if (value === true) {
      return (
        <div className="flex justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-md">
            <FiCheck className="w-5 h-5 text-white" />
          </div>
        </div>
      );
    } else if (value === false) {
      return (
        <div className="flex justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center shadow-md">
            <FiX className="w-5 h-5 text-white" />
          </div>
        </div>
      );
    }
    return <div className="font-medium text-gray-800 new-font">{value}</div>;
  };

  if (loading) {
    return (
      <section className="mb-16">
        <div className="mt-20 mb-12 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
        <div className="flex justify-center items-center py-20">
          <div className="text-gray-600 new-font">
            Loading comparison data...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-16">
      <div className="mt-20 mb-12 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <Heading
        heading="E-commerce Website plans"
        mt={false}
        underline={false}
      />

      {/* Mobile Tabs */}
      <div className="md:hidden mb-6 flex gap-2 justify-center">
        <button
          onClick={() => setSelectedPlan("starter")}
          className={`px-6 py-2 rounded-lg font-medium transition-all new-font ${
            selectedPlan === "starter"
              ? "gradient-bg text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Starter
        </button>
        <button
          onClick={() => setSelectedPlan("advanced")}
          className={`px-6 py-2 rounded-lg font-medium transition-all new-font ${
            selectedPlan === "advanced"
              ? "gradient-bg text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Advanced
        </button>
      </div>

      <div className="relative">
        <div className="relative overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-2xl">
          <div className="overflow-x-auto">
            <table className="min-w-full table-fixed">
              <thead>
                <tr className="bg-gradient-to-r from-gray-800 to-gray-900">
                  <th className="hidden md:table-cell w-1/6 px-6 py-4 border-r border-gray-600 text-center font-medium text-white text-base tracking-wide new-font">
                    Category
                  </th>
                  <th className="w-1/2 md:w-1/4 px-6 py-4 border-r border-gray-600 text-center font-medium text-white text-base new-font">
                    Feature
                  </th>
                  <th
                    className={`w-1/2 md:w-[25%] px-6 py-4 border-r border-gray-600 text-center ${
                      selectedPlan === "advanced" ? "hidden md:table-cell" : ""
                    }`}
                  >
                    <div className="font-semibold text-xl text-white mb-1 new-font">
                      Starter
                    </div>
                    <div className="text-xs text-gray-300 font-normal">
                      Essential Plan
                    </div>
                  </th>
                  <th
                    className={`w-1/2 md:w-[25%] px-6 py-4 text-center ${
                      selectedPlan === "starter" ? "hidden md:table-cell" : ""
                    }`}
                  >
                    <div className="font-semibold text-xl text-white mb-1 new-font">
                      Advanced
                    </div>
                    <div className="text-xs text-gray-300 font-normal">
                      Pro Plan
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {features.map((feature, idx) => (
                  <React.Fragment key={idx}>
                    {feature.items.map((item, itemIdx) => (
                      <tr
                        key={itemIdx}
                        className={`group transition-all duration-200 hover:bg-gray-50 ${
                          itemIdx === 0 ? "border-t border-gray-300" : ""
                        }`}
                      >
                        {itemIdx === 0 && (
                          <td
                            className="hidden md:table-cell px-6 py-4 border-r border-gray-300 align-top bg-gray-50/30 group-hover:bg-gray-50 transition-colors"
                            rowSpan={feature.items.length}
                          >
                            <div className="font-semibold text-gray-800 text-base sticky left-0 new-font">
                              {feature.category}
                            </div>
                          </td>
                        )}
                        <td className="px-6 py-4 border-r border-gray-300">
                          <div className="text-gray-700 font-normal text-left new-font">
                            {item.name}
                          </div>
                        </td>
                        <td
                          className={`px-6 py-4 border-r border-gray-300 text-center ${
                            selectedPlan === "advanced"
                              ? "hidden md:table-cell"
                              : ""
                          }`}
                        >
                          {renderValue(item.starter)}
                        </td>
                        <td
                          className={`px-6 py-4 text-center ${
                            selectedPlan === "starter"
                              ? "hidden md:table-cell"
                              : ""
                          }`}
                        >
                          {item.advanced ===
                          "Detailed status updates ('Packed', 'Shipped', 'Out for Delivery')" ? (
                            <div className="relative group/tooltip">
                              <div className="font-medium text-gray-800 md:hidden new-font">
                                Detailed
                              </div>
                              <div className="hidden md:block">
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium new-font">
                                  {item.advanced}
                                </span>
                              </div>
                            </div>
                          ) : (
                            renderValue(item.advanced)
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer note */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-300">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600"></div>
                  <span className="text-gray-600 new-font">Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-rose-400 to-rose-600"></div>
                  <span className="text-gray-600 new-font">Not included</span>
                </div>
              </div>
              <div className="text-gray-500 text-xs new-font">
                * Custom plans available upon request
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
