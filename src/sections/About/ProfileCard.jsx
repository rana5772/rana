import React from "react";
import { motion } from "framer-motion"; // Import motion

const ProfileCard = () => {
  return (
    <div className="flex items-center mb-10 mt-20 justify-center">
      {/* Main Card Container */}
      <div className="relative w-full max-w-4xl bg-white/60 backdrop-blur-md rounded-tr-3xl rounded-bl-3xl px-8 pb-10 pt-16 shadow-xl">
        {/* Profile Icon - Animated with Framer Motion */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          className="absolute top-0 left-8 -translate-y-1/2"
        >
          <div className="w-24 h-24 rounded-full border-2 border-primary overflow-hidden bg-white shadow-lg">
            <img
              src="/images/profile.png"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content - Static */}
        <h2 className="text-2xl text-left font-semibold text-gray-900 tracking-wide new-font mb-4">
          Message from the Founder
        </h2>

        <p className="text-gray-500 leading-relaxed">
          <span className="text-gradient underline">
            <a href="https://rana.net.in" target="_blank" rel="noreferrer">
              rana.net.in
            </a>
          </span>{" "}
          was founded on a clear mission: ensuring technology is a catalyst for
          startups, not a hurdle.
          <br /> With a background in building scalable architecture and solving
          complex engineering bottlenecks, I act as a dedicated tech partner for
          founders who value reliability over agency fluff.
          <br /> We focus on launching high-impact products, maintaining a
          balance between speed and stability, and providing long-term support
          throughout the growth journey.
        </p>

        <div className="mt-5 new-font text-right">
          <p>- Vaibhav Rana</p>
          <p className="text-gradient underline text-[15px]">
            <a href="https://rana.net.in" target="_blank" rel="noreferrer">
              rana.net.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
