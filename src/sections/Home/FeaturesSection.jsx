import React from "react";
import {
  MonitorSmartphone,
  Smartphone,
  Globe,
  Search,
  ShoppingBag,
  IndianRupee,
} from "lucide-react";
import Heading from "../../components/Heading";
import GlassBox from "../../components/GlassBox";

const features = [
  {
    title: "Responsive Design",
    description:
      "Flexible UI/UX compatible across all devices and screen sizes like smart-phones, tablets and laptops.",
    icon: MonitorSmartphone,
  },
  {
    title: "Domain & Hosting",
    description:
      "Secure and scalable hosting solutions paired with seamless domain management to keep your business online.",
    icon: Globe,
  },
  {
    title: "Search Engine Optimization",
    description:
      "Boosting your digital presence through strategic keyword integration and technical performance optimization.",
    icon: Search,
  },
  {
    title: "Mobile App development",
    description:
      "Building high-performance Android and iOS applications with native functionality and smooth user flows.",
    icon: Smartphone,
  },
  {
    title: "e-Commerce store",
    description:
      "Developing robust online stores with managed product catalogs, shopping carts, and conversion-focused design.",
    icon: ShoppingBag,
  },
  {
    title: "Admin Panel & Payment Gateway",
    description:
      "Integrating secure payment processing and intuitive management dashboards for full operational control.",
    icon: IndianRupee,
  },
];

const FeaturesSection = () => {
  return (
    <section className="mx-auto mt-10 max-w-6xl">
      <Heading
        heading="Launch your Website Today"
        underline={false}
        mt={false}
      />
      <p className="para text-center">
        <span>
          Building high-performance web and mobile solutions tailored to scale
          your business.
        </span>
        <br />
        <span className="md:block hidden">
          Empowering your digital growth with seamless technology and
          future-proof architecture.
        </span>
      </p>

      <GlassBox text="Strengthen Your Brand Identity" />

      <div className="max-w-7xl mt-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/75 hover:bg-white backdrop-blur-2xl p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-xl hover:border-blue-500"
            >
              {/* Icon Container */}
              <div className="blue-bg p-3 rounded-md mb-6 flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-600">
                <feature.icon
                  className="w-6 h-6 text-white"
                  strokeWidth={2.5}
                />
              </div>

              {/* Content */}
              <h3 className="text-[#0F172A] new-font text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-[#64748B] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
