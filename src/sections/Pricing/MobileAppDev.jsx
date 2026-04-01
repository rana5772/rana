import React from "react";
import Heading from "../../components/Heading";
import { LuBellRing } from "react-icons/lu";
import {
  HiOutlineDevicePhoneMobile,
  HiOutlineArrowPath,
} from "react-icons/hi2";

const features = [
  {
    icon: <HiOutlineDevicePhoneMobile className="w-6 h-6 text-blue-600" />,
    title: "Cross-Platform Compatibility",
    description:
      "React Native works on both iPhone and Android (compatible for both Android and iOS)",
  },
  {
    icon: <HiOutlineArrowPath className="w-6 h-6 text-blue-600" />,
    title: "Easy Updates",
    description:
      "The ability to update the product list easily using admin panel.",
  },
  {
    icon: <LuBellRing className="w-6 h-6 text-blue-600" />,
    title: "Push Notifications",
    description:
      "Stay connected with your users by sending instant updates, promotions, and alerts directly to their devices.",
  },
];

const MobileAppDev = () => {
  return (
    <section className="mb-16">
      <div className="mt-20 mb-12 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <Heading heading="Mobile App Development" mt={false} underline={false} />

      <div className="bg-gradient-to-r mt-5 from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
        <p className="text-3xl text-center blue-text new-font mb-6">
          Starting from <span className="text-[25px]">Rs</span> 16,000/-
        </p>

        <div className="grid md:grid-cols-3 gap-12 mb-6 mt-10">
          {/* Added mt-10 to make room for the first row's icons */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-6 pt-10 shadow-md"
            >
              {/* Icon Circle */}
              <div className="absolute -top-6 left-6 aspect-square h-14 bg-blue-100 rounded-full flex items-center justify-center shadow-sm">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="main-heading font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <p className="text-3xl text-center font-medium main-heading">
            Project Timeline - 2 weeks
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobileAppDev;
