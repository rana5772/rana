import React from "react";

const ComparisonTable = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        E-Commerce Plans
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-lg">
          <thead>
            <tr className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
              <th className="px-4 py-3 border border-gray-600 text-left">
                Category
              </th>
              <th className="px-4 py-3 border border-gray-600 text-left">
                Feature
              </th>
              <th className="px-4 py-3 border border-gray-600 text-center">
                Starter E-commerce Website - 11K
              </th>
              <th className="px-4 py-3 border border-gray-600 text-center">
                Advanced E-commerce Website - 18K
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 border border-gray-200 font-semibold bg-gray-50">
                Shopping Cart
              </td>
              <td className="px-4 py-3 border border-gray-200">
                Add to cart without login
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                ✓
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                ✓
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td
                className="px-4 py-3 border border-gray-200 font-semibold bg-gray-50"
                rowSpan={2}
              >
                Product Reviews
              </td>
              <td className="px-4 py-3 border border-gray-200">Star rating</td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                ✓
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                ✓
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 border border-gray-200">
                Written comments
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                ✗
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                ✓
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td
                className="px-4 py-3 border border-gray-200 font-semibold bg-gray-50"
                rowSpan={2}
              >
                Order Management
              </td>
              <td className="px-4 py-3 border border-gray-200">
                Cancel order (from user dashboard)
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                ✗
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                ✓
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 border border-gray-200">
                Order tracking / history
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                Basic
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                Detailed status updates ('Packed', 'Shipped', 'Out for
                Delivery')
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td
                className="px-4 py-3 border border-gray-200 font-semibold bg-gray-50"
                rowSpan={2}
              >
                SEO & Marketing
              </td>
              <td className="px-4 py-3 border border-gray-200">
                Basic meta tags (title, description)
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                ✓
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                ✓
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 border border-gray-200">
                Automatic AI SEO optimisation for products
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                ✗
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                ✓
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td
                className="px-4 py-3 border border-gray-200 font-semibold bg-gray-50"
                rowSpan={2}
              >
                Admin Panel
              </td>
              <td className="px-4 py-3 border border-gray-200">
                Product, order, user management
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                ✓
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                ✓
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 border border-gray-200">
                Advanced analytics & sales reports
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                ✗
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                ✓
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td
                className="px-4 py-3 border border-gray-200 font-semibold bg-gray-50"
                rowSpan={2}
              >
                Payments Gateway
              </td>
              <td className="px-4 py-3 border border-gray-200">
                Razorpay / UPI integration
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                ✓
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                ✓
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 border border-gray-200">
                other payment methods (credit card)
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                ✗
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                ✓
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td
                className="px-4 py-3 border border-gray-200 font-semibold bg-gray-50"
                rowSpan={2}
              >
                Performance & Scalability
              </td>
              <td className="px-4 py-3 border border-gray-200">
                Image optimisation
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                Basic
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                Advanced (lazy loading, WebP) for faster loading speed
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 border border-gray-200">Scalability</td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                upto 5 lakh users
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                upto 10 lakh users
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td
                className="px-4 py-3 border border-gray-200 font-semibold bg-gray-50"
                rowSpan={2}
              >
                Support & Maintenance
              </td>
              <td className="px-4 py-3 border border-gray-200">
                Project Timeline
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                10 days
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                15 days
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 border border-gray-200">Free support</td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                1 month
              </td>
              <td className="px-4 py-3 border border-gray-200 text-center">
                3 months
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonTable;
