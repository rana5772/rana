import React from "react";
import Heading from "../../components/Heading";

const FeatureSection = ({
  image,
  title,
  description,
  features,
  reverse = false,
  imageClass = "scale-95",
}) => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div
          className={`flex justify-center ${reverse ? "order-1 md:order-2" : ""}`}
        >
          <img
            data-aos="zoom-in"
            src={image}
            alt={title}
            className={`w-full h-auto transform transition duration-500 ${imageClass}`}
          />
        </div>

        <div className={reverse ? "order-2 md:order-1" : ""}>
          <Heading heading={title} align="left" underline={false} mt={false} />

          <div className="text-lg text-gray-600 mb-5">
            <p>{description}</p>

            {/* The "Official" CSS way using the marker selector */}
            <ul className="mt-6 space-y-3 list-none">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="relative pl-7 before:content-['✓'] before:absolute before:left-0 before:text-blue-600 before:font-bold"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const GridSection = () => {
  return (
    <div className="">
      <FeatureSection
        image="/images/1.svg"
        title="Reliable Domain and Hosting"
        description="Secure, reliable, and hassle-free domain and hosting solutions with 24/7 support to keep your server running smoothly."
        features={[
          ".com domain for ₹1000 / year",
          ".in domain for ₹500 / year",
          "free SSL certificate",
        ]}
      />

      <FeatureSection
        reverse
        image="/images/2.svg"
        title="Boost Visibility with SEO"
        description="Optimize your website to achieve higher rankings on search engines, attract your target audience, and drive organic growth."
        features={[
          "Comprehensive keyword research analysis",
          "On-page & Off-page optimization strategies",
          "Track performance for steady growth",
        ]}
      />

      <FeatureSection
        image="/images/3.svg"
        title="Adaptable for All Screen Sizes"
        description="Responsive, modern and user-friendly layouts designed to look stunning on every screen - from smartphones to desktops."
        imageClass="scale-100"
        features={[
          "Mobile-First Approach for seamless on-the-go browsing",
          "Fluid Grids & Layouts that adapt to any screen size",
          "Universal Browser Support across Safari, Chrome, and Edge",
        ]}
      />
    </div>
  );
};

export default GridSection;
