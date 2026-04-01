import React from "react";
import Heading from "../../components/Heading";

const features = [
  {
    title: "Seamless Shopping Experience",
    desc: "Includes 'Guest Checkout' (Add to cart without login) to increase conversion rates.",
  },
  {
    title: "Advanced Product Reviews",
    desc: "Supports both Star Ratings and written customer feedback.",
  },
  {
    title: "Full Order Control",
    desc: "Users can view detailed status updates (Packed, Shipped, Out for Delivery) and cancel orders directly from their dashboard.",
  },
  {
    title: "Razorpay & Multi-Payment Suite",
    desc: "Pre-integrated with UPI, Credit/Debit cards, and NetBanking.",
  },
  {
    title: "Blazing Fast Performance",
    desc: "Built with Lazy Loading and WebP Image Optimization for near-instant page loads.",
  },
  {
    title: "Smart Admin Panel",
    desc: "Full control over products, user management, and advanced sales analytics.",
  },
  {
    title: "Scalable Architecture",
    desc: "Built to handle high traffic effortlessly (optimized for up to 1M+ users).",
  },
];

const EcommerceComponent = () => {
  return (
    <section className="mb-16">
      <Heading emoji="🛍️" heading="E-Commerce App" mt={false} underline={false} />

      <div className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-gray-100">
        <p className="text-xl text-center text-gray-700 mb-6">
          A high-performance mobile store designed for maximum sales.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start p-3 bg-gray-50 border-gray-500 rounded-lg"
            >
              <svg
                className="w-5 h-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceComponent;
