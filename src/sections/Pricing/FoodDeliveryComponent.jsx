import React from "react";
import Heading from "../../components/Heading";

const features = [
  {
    title: "Interactive Digital Menu",
    desc: "A clean, visually appealing menu with categories and item descriptions.",
  },
  {
    title: "Customizable Orders",
    desc: "Allow customers to add special instructions or select add-ons (e.g., extra cheese or spice level).",
  },
  {
    title: "Live GPS Order Tracking",
    desc: "Real-time map view so customers can track their delivery partner from the kitchen to their door.",
  },
  {
    title: "One-Click Razorpay UPI",
    desc: "Seamless integration with Google Pay, PhonePe, and Paytm for the fastest checkout experience in India.",
  },
  {
    title: "Instant Order Alerts",
    desc: "Real-time push notifications to keep customers updated on their order status.",
  },
  {
    title: "Simple Order Management",
    desc: "A dedicated view for the restaurant to accept and manage incoming orders instantly.",
  },
];

const FoodDeliveryComponent = () => {
  return (
    <section className="mb-16">
      <Heading
        emoji="🍔"
        heading="Food Delivery App"
        mt={false}
        underline={false}
      />

      <div className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-gray-100">
        <p className="text-xl text-center text-gray-700 mb-6">
          Professional mobile ordering for your restaurant.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start p-3 bg-gray-50 border-gray-500 rounded-lg"
            >
              <svg
                className="w-5 h-5 text-orange-500 mt-0.5 mr-3 flex-shrink-0"
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

export default FoodDeliveryComponent;
