import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
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
  // Animation variants for the container to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for individual cards
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="mb-16">
      <div className="mt-20 mb-12 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Heading heading="Mobile App Development" mt={false} underline={false} />
      </motion.div>

      <div className="bg-gradient-to-r mt-5 from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="text-3xl text-center blue-text new-font mb-6"
        >
          Starting from <span className="text-[25px]">Rs</span> 16,000/-
        </motion.p>

        {/* Features Grid with Staggered Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-12 mb-6 mt-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-white rounded-xl p-6 pt-10 shadow-md"
              whileHover={{ scale: 1.03 }} // Subtle hover effect
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
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className="flex justify-center items-center mt-8"
        >
          <p className="text-3xl text-center font-medium main-heading">
            Project Timeline - 2 weeks
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileAppDev;