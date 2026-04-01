import React from "react";
import Heading from "../../components/Heading";

const ComparisonTable = () => {
  return (
    <section className="mb-16">
      <div className="mt-20 mb-12 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <Heading
        heading="E-commerce Website plans"
        mt={false}
        underline={false}
      />

      <div className="overflow-hidden rounded-xl border mt-5 border-gray-200 shadow-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed bg-white">
            <thead>
              <tr className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                {/* Hiding Category on mobile */}
                <th className="hidden md:table-cell w-1/6 px-4 py-3 border-r border-gray-600 text-center font-semibold new-font">
                  Category
                </th>
                <th className="w-1/3 md:w-1/4 px-4 py-3 border-r border-gray-600 text-center font-normal new-font">
                  Feature
                </th>
                <th className="w-[33%] md:w-[25%] px-4 py-3 border-r border-gray-600 text-center font-normal new-font">
                  Starter
                </th>
                <th className="w-[33%] md:w-[25%] px-4 py-3 text-center font-normal new-font">
                  Advanced
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {/* Pricing */}
              <tr className="hover:bg-gray-50 border-t border-gray-200">
                <td className="hidden md:table-cell px-4 py-3 border-r border-gray-200 text-center new-font font-semibold">
                  Pricing
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  Setup Cost
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  Rs 11,000/-
                </td>
                <td className="px-4 py-3 text-center new-font">Rs 16,000/-</td>
              </tr>

              {/* Shopping Cart */}
              <tr className="hover:bg-gray-50 border-t border-gray-200">
                <td className="hidden md:table-cell px-4 py-3 border-r border-gray-200 text-center new-font font-semibold">
                  Shopping Cart
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  Add to cart without login
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font text-emerald-600 font-bold text-xl">
                  ✓
                </td>
                <td className="px-4 py-3 text-center new-font text-emerald-600 font-bold text-xl">
                  ✓
                </td>
              </tr>

              {/* Product Reviews */}
              <tr className="hover:bg-gray-50 border-t border-gray-200">
                <td
                  className="hidden md:table-cell px-4 py-3 border-r border-gray-200 text-center new-font font-semibold"
                  rowSpan={2}
                >
                  Product Reviews
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  Star rating
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font text-emerald-600 font-bold text-xl">
                  ✓
                </td>
                <td className="px-4 py-3 text-center new-font text-emerald-600 font-bold text-xl">
                  ✓
                </td>
              </tr>
              <tr className="hover:bg-gray-50 border-t border-gray-200">
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  Written comments
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font text-rose-600 font-bold text-xl">
                  ✗
                </td>
                <td className="px-4 py-3 text-center new-font text-emerald-600 font-bold text-xl">
                  ✓
                </td>
              </tr>

              {/* Order Management */}
              <tr className="hover:bg-gray-50 border-t border-gray-200">
                <td
                  className="hidden md:table-cell px-4 py-3 border-r border-gray-200 text-center new-font font-semibold"
                  rowSpan={2}
                >
                  Order Management
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  Cancel order (user dashboard)
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font text-rose-600 font-bold text-xl">
                  ✗
                </td>
                <td className="px-4 py-3 text-center new-font text-emerald-600 font-bold text-xl">
                  ✓
                </td>
              </tr>
              <tr className="hover:bg-gray-50 border-t border-gray-200">
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  Order tracking
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  Basic history
                </td>
                <td className="px-4 py-3 text-center new-font">
                  <span className="md:hidden">Detailed</span>
                  <span className="hidden md:block">
                    Detailed status updates ('Packed', 'Shipped', 'Out for
                    Delivery')
                  </span>
                </td>
              </tr>

              {/* SEO & Marketing */}
              <tr className="hover:bg-gray-50 border-t border-gray-200">
                <td
                  className="hidden md:table-cell px-4 py-3 border-r border-gray-200 text-center new-font font-semibold"
                  rowSpan={2}
                >
                  SEO & Marketing
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  Basic meta tags
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font text-emerald-600 font-bold text-xl">
                  ✓
                </td>
                <td className="px-4 py-3 text-center new-font text-emerald-600 font-bold text-xl">
                  ✓
                </td>
              </tr>
              <tr className="hover:bg-gray-50 border-t border-gray-200">
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  AI SEO optimisation
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font text-rose-600 font-bold text-xl">
                  ✗
                </td>
                <td className="px-4 py-3 text-center new-font text-emerald-600 font-bold text-xl">
                  ✓
                </td>
              </tr>

              {/* Admin Panel */}
              <tr className="hover:bg-gray-50 border-t border-gray-200">
                <td
                  className="hidden md:table-cell px-4 py-3 border-r border-gray-200 text-center new-font font-semibold"
                  rowSpan={2}
                >
                  Admin Panel
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  Standard management
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font text-emerald-600 font-bold text-xl">
                  ✓
                </td>
                <td className="px-4 py-3 text-center new-font text-emerald-600 font-bold text-xl">
                  ✓
                </td>
              </tr>
              <tr className="hover:bg-gray-50 border-t border-gray-200">
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  Advanced analytics
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font text-rose-600 font-bold text-xl">
                  ✗
                </td>
                <td className="px-4 py-3 text-center new-font text-emerald-600 font-bold text-xl">
                  ✓
                </td>
              </tr>

              {/* Payments Gateway */}
              <tr className="hover:bg-gray-50 border-t border-gray-200">
                <td
                  className="hidden md:table-cell px-4 py-3 border-r border-gray-200 text-center new-font font-semibold"
                  rowSpan={2}
                >
                  Payments
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  Razorpay / UPI
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font text-emerald-600 font-bold text-xl">
                  ✓
                </td>
                <td className="px-4 py-3 text-center new-font text-emerald-600 font-bold text-xl">
                  ✓
                </td>
              </tr>
              <tr className="hover:bg-gray-50 border-t border-gray-200">
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  Credit Cards / Other
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font text-rose-600 font-bold text-xl">
                  ✗
                </td>
                <td className="px-4 py-3 text-center new-font text-emerald-600 font-bold text-xl">
                  ✓
                </td>
              </tr>

              {/* Performance */}
              <tr className="hover:bg-gray-50 border-t border-gray-200">
                <td
                  className="hidden md:table-cell px-4 py-3 border-r border-gray-200 text-center new-font font-semibold"
                  rowSpan={2}
                >
                  Performance
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  Optimization
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  Standard
                </td>
                <td className="px-4 py-3 text-center new-font">
                  Next-gen (WebP/Lazy)
                </td>
              </tr>
              <tr className="hover:bg-gray-50 border-t border-gray-200">
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  Scalability
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  5 Lakh users
                </td>
                <td className="px-4 py-3 text-center new-font">
                  10 Lakh users
                </td>
              </tr>

              {/* Support */}
              <tr className="hover:bg-gray-50 border-t border-gray-200">
                <td
                  className="hidden md:table-cell px-4 py-3 border-r border-gray-200 text-center new-font font-semibold"
                  rowSpan={2}
                >
                  Support
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  Timeline
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  10 days
                </td>
                <td className="px-4 py-3 text-center new-font">15 days</td>
              </tr>
              <tr className="hover:bg-gray-50 border-t border-gray-200">
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  Free Maintenance
                </td>
                <td className="px-4 py-3 border-r border-gray-200 text-center new-font">
                  1 month
                </td>
                <td className="px-4 py-3 text-center new-font">3 months</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
