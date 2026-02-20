import React, { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, useInView, animate } from 'framer-motion';

const Counter = ({ value }) => {
  const ref = useRef(null);
  // Re-triggers when 50% of the element is visible
  const isInView = useInView(ref, { once: false, amount: 0.5 }); 
  
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  const count = useMotionValue(0);
  // Stiffness and Damping control the "vibe" of the spring
  const springValue = useSpring(count, { stiffness: 40, damping: 20 });

  useEffect(() => {
    if (isInView) {
      count.set(0); 
      animate(count, numericValue, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, numericValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const NumberSection = () => {
  const stats = [
    { label: "Projects Completed", value: "41+" },
    { label: "Client Satisfaction", value: "101%" },
    { label: "Experience", value: "5+ years" },
  ];

  return (
    <section className="py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => {
          // Check if it's the experience stat
          const isExperience = stat.label.toLowerCase().includes("experience");

          return (
            <div 
              key={index} 
              id='dark-border'
              className="glass-dark p-5 flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-4xl font-medium numbers mb-2">
                {isExperience ? (
                  stat.value // Static text
                ) : (
                  <Counter value={stat.value} /> // Animated component
                )}
              </h3>
              <p className="opacity-90 font-[350] tracking-wide uppercase text-[15px]">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NumberSection;