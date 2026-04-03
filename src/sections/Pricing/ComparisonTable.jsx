import React from "react";
import Heading from "../../components/Heading";

const ComparisonTable = () => {
  const features = [
    {
      category: "Pricing",
      items: [
        {
          name: "Setup Cost",
          starter: "Rs 11,000/-",
          advanced: "Rs 16,000/-",
          isCheck: false,
        },
      ],
    },
    {
      category: "Shopping Cart",
      items: [
        {
          name: "Add to cart without login",
          starter: true,
          advanced: true,
          isCheck: true,
        },
      ],
    },
    {
      category: "Product Reviews",
      items: [
        { name: "Star rating", starter: true, advanced: true, isCheck: true },
        {
          name: "Written comments",
          starter: false,
          advanced: true,
          isCheck: true,
        },
      ],
    },
    {
      category: "Order Management",
      items: [
        {
          name: "Cancel order (user dashboard)",
          starter: false,
          advanced: true,
          isCheck: true,
        },
        {
          name: "Order tracking",
          starter: "Basic history",
          advanced:
            "Detailed status updates ('Packed', 'Shipped', 'Out for Delivery')",
          isCheck: false,
        },
      ],
    },
    {
      category: "SEO & Marketing",
      items: [
        {
          name: "Basic meta tags",
          starter: true,
          advanced: true,
          isCheck: true,
        },
        {
          name: "AI SEO optimisation",
          starter: false,
          advanced: true,
          isCheck: true,
        },
      ],
    },
    {
      category: "Admin Panel",
      items: [
        {
          name: "Standard management",
          starter: true,
          advanced: true,
          isCheck: true,
        },
        {
          name: "Advanced analytics",
          starter: false,
          advanced: true,
          isCheck: true,
        },
      ],
    },
    {
      category: "Payments",
      items: [
        {
          name: "Razorpay / UPI",
          starter: true,
          advanced: true,
          isCheck: true,
        },
        {
          name: "Credit Cards / Other",
          starter: false,
          advanced: true,
          isCheck: true,
        },
      ],
    },
    {
      category: "Performance",
      items: [
        {
          name: "Optimization",
          starter: "Standard",
          advanced: "Next-gen (WebP/Lazy)",
          isCheck: false,
        },
        {
          name: "Scalability",
          starter: "5 Lakh users",
          advanced: "10 Lakh users",
          isCheck: false,
        },
      ],
    },
    {
      category: "Support",
      items: [
        {
          name: "Timeline",
          starter: "10 days",
          advanced: "15 days",
          isCheck: false,
        },
        {
          name: "Free Maintenance",
          starter: "1 month",
          advanced: "3 months",
          isCheck: false,
        },
      ],
    },
  ];

  const renderValue = (value) => {
    if (value === true) {
      return (
        <div className="flex justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-md">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
        </div>
      );
    } else if (value === false) {
      return (
        <div className="flex justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center shadow-md">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </div>
      );
    }
    return <div className="font-medium text-gray-800 new-font">{value}</div>;
  };

  return (
    <section className="mb-16">
      <div className="mt-20 mb-12 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <Heading
        heading="E-commerce Website plans"
        mt={false}
        underline={false}
      />

      <div className="relative">

        <div className="relative overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-2xl">

          <div className="overflow-x-auto">
            <table className="min-w-full table-fixed">
              <thead>
                <tr className="bg-gradient-to-r from-gray-800 to-gray-900">
                  <th className="hidden md:table-cell w-1/6 px-6 py-4 border-r border-gray-600 text-center font-medium text-white text-base tracking-wide new-font">
                    Category
                  </th>
                  <th className="w-1/3 md:w-1/4 px-6 py-4 border-r border-gray-600 text-center font-medium text-white text-base new-font">
                    Feature
                  </th>
                  <th className="w-[33%] md:w-[25%] px-6 py-4 border-r border-gray-600 text-center">
                    <div className="font-semibold text-xl text-white mb-1 new-font">
                      Starter
                    </div>
                    <div className="text-xs text-gray-300 font-normal">
                      Essential Plan
                    </div>
                  </th>
                  <th className="w-[33%] md:w-[25%] px-6 py-4 text-center">
                    <div className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-1 new-font">
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
                        <td className="px-6 py-4 border-r border-gray-300 text-center">
                          {renderValue(item.starter)}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {item.advanced ===
                          "Detailed status updates ('Packed', 'Shipped', 'Out for Delivery')" ? (
                            <div className="relative group/tooltip">
                              <div className="font-medium text-gray-800 md:hidden new-font">
                                Detailed
                              </div>
                              <div className="hidden md:block">
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium new-font">
                                  {item.advanced}
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                  </svg>
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
