import React from "react";

const MarqueeSection = () => {
  const logos = [
    "/images/logos/1.svg",
    "/images/logos/2.svg",
    "/images/logos/3.svg",
    "/images/logos/4.svg",
    "/images/logos/5.svg",
    "/images/logos/6.svg",
    "/images/logos/7.svg",
    "/images/logos/8.svg",
  ];

  // Doubling the logos ensures a seamless loop
  const displayLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden my-5 scale-125">
      {/* Inline Styles for the Keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
      `}</style>

      <div className="relative flex items-center">
        <div className="animate-marquee">
          {displayLogos.map((logo, index) => (
            <div
              key={index}
              className="md:mx-10 mx-5 flex-shrink-0 flex items-center justify-center transition-all duration-700 ease-in-out"
            >
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="max-w-full h-[100px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
