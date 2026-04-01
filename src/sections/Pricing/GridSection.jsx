import React from "react";
import Heading from "../../components/Heading";

const services = [
  {
    title: "Web Hosting & Domain Integration",
    price: "1,000",
    description:
      "Includes: Connecting your domain name to the server and hosting it online with free SSL certificate.",
    timeline: "1 day",
    color: "bg-yellow-500",
    borderColor: "border-yellow-500",
  },
  {
    title: "AI Chatbot Integration",
    price: "2,000",
    description:
      "Includes: Custom knowledge base (trained on client data), Lead generation flow, and WhatsApp/Website deployment.",
    timeline: "2 days",
    color: "bg-purple-500",
    borderColor: "border-purple-500",
  },
  {
    title: "Automatic AI Blogs Setup",
    price: "3,000",
    description:
      "A 'Hands-free' system that researches trending topics in the client's niche, writes 1,000+ word SEO articles, and auto-publishes to their site weekly.",
    timeline: "3 days",
    color: "bg-blue-500",
    borderColor: "border-blue-500",
  },
  {
    title: "Play Store Deployment Package",
    price: "4,000",
    description:
      "Handling the headache of Google Play and Apple App Store submissions, screenshots, and metadata to launch your app on PlayStore and AppStore.",
    timeline: "4-6 weeks",
    color: "bg-green-500",
    borderColor: "border-green-500",
  },
];

const ServiceCard = ({
  title,
  price,
  description,
  timeline,
  color,
  borderColor,
}) => (
  <div className="relative h-full">
    <span
      className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 ${color} rounded-lg`}
    ></span>
    <div
      className={`relative h-full p-5 bg-white border-2 ${borderColor} rounded-lg flex flex-col`}
    >
      <div className="flex items-center -mt-1">
        <h3 className="my-2 text-xl main-heading font-semibold text-gray-800">
          {title}
        </h3>
      </div>

      <p className="mb-6 text-gray-600 text-sm leading-relaxed flex-grow">
        {description}
      </p>

      {/* Flexbox: Timeline on Left, Price on Right */}
      <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
        <div className="text-sm font-medium text-gray-700">
          Timeline: {timeline}
        </div>
        <div className="text-xl font-semibold blue-text">
          <span className="text-[18px]">Rs</span> {price}/-
        </div>
      </div>
    </div>
  </div>
);

const GridSection = () => {
  return (
    <div className="container px-10 mx-auto mt-5">
      <div className="mt-20 mb-12 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <Heading heading="Special Plans" mt={false} underline={false} />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {/* Top Card: Spans all 12 columns */}
        <div className="md:col-span-12">
          <ServiceCard {...services[0]} />
        </div>

        {/* Bottom 3 Cards: Each spans 4 columns (12 / 3 = 4) */}
        {services.slice(1).map((service, index) => (
          <div key={index} className="md:col-span-4">
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridSection;
