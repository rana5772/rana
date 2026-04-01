import React from "react";

const plans = [
  {
    title: "WEB HOSTING & DOMAIN INTEGRATION",
    price: "1K",
    description:
      "Includes: Connecting your domain name to the server and hosting it online with free SSL certificate.",
    timeline: "1 day",
  },
  {
    title: "AI CHATBOT INTEGRATION",
    price: "2K",
    description:
      "Includes: Custom knowledge base (trained on client data), Lead generation flow, and WhatsApp/Website deployment.",
    timeline: "2 days",
  },
  {
    title: "AUTOMATIC AI BLOGS SYSTEM SETUP",
    price: "3K",
    description:
      "A 'Hands-free' system that researches trending topics in the client's niche, writes 1,000+ word SEO articles, and auto-publishes to their site weekly.",
    timeline: "3 days",
  },
  {
    title: "PLAY STORE DEPLOYMENT PACKAGE",
    price: "4K",
    description:
      "Handling the headache of Google Play and Apple App Store submissions, screenshots, and metadata to launch your app on PlayStore and AppStore.",
    timeline: "4-6 weeks",
  },
];

const SpecialPlans = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Special Plans
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {plan.title}
            </h3>
            <p className="text-2xl font-bold text-blue-600 mb-4">
              {plan.price}
            </p>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <p className="text-sm text-gray-500">
              Project Timeline: {plan.timeline}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialPlans;
