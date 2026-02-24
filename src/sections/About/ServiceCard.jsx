import React, { useState, useEffect } from "react";

const ServiceCard = ({
  image = "",
  title = "Untitled Article",
  description = "No description available at this time.",
  imagePosition = "left",
  tags = [
    { label: "label 1", color: "bg-emerald-300" },
    { label: "label 2", color: "bg-blue-300" },
  ],
  // Defaulting to 2 general features
  features = [
    {
      title: "Core Feature One",
      desc: "Detailed description of the first primary service or capability offered, highlighting the key benefits and value proposition for the end user.",
    },
    {
      title: "Core Feature Two",
      desc: "Detailed description of the second primary service or capability offered, highlighting the key benefits and value proposition for the end user.",
    },
  ],
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [image]);

  const layoutClass =
    imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div className="shadow-md overflow-hidden rounded-2xl">
      <div
        className={`w-full bg-white/65 rounded-t-2xl overflow-hidden flex flex-col ${layoutClass}`}
      >
        <div
          data-aos="flip-down"
          className="relative h-72 md:w-1/3 md:h-auto md:min-h-[250px] m-4 rounded-2xl flex-shrink-0 overflow-hidden bg-gray-200"
        >
          {!isLoaded && (
            <div className="absolute inset-0 z-10 bg-gray-200 overflow-hidden">
              <div className="skeleton-slant" />
            </div>
          )}

          {image && (
            <img
              src={image}
              onLoad={() => setIsLoaded(true)}
              className="hidden"
              alt={title}
            />
          )}

          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            style={{ backgroundImage: `url(${image})` }}
            role="img"
            aria-label={title}
          />
        </div>

        <div className="p-6 flex flex-col justify-center flex-grow">
          <h3 className="text-4xl font-medium main-heading new-font text-gray-900 mb-2">
            {title}
          </h3>

          <div
            className="text-gray-600 text-justify mb-4"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <div className="flex flex-wrap gap-3 uppercase">
            {tags.map((tag, index) => (
              <div
                key={index}
                className={`${tag.color} inline-block px-3 py-1 rounded-full`}
              >
                {tag.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white/0 text-gray-800 p-8 rounded-b-2xl border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {features.map((item, index) => (
            <div key={index} className="flex gap-4 relative">
              <div className="flex flex-col items-center">
                <div className="z-10 text-[20px] flex items-center justify-center w-10 h-10 gradient-bg text-white rounded-full shrink-0">
                  {index + 1}
                </div>
                {/* Vertical line connector logic preserved */}
                {index < features.length - 2 && (
                  <div className="hidden md:block w-[2px] bg-gray-300 h-full absolute top-10 left-5 -z-0"></div>
                )}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-xl new-font font-medium text-gray-800">
                    {item.title}
                  </h4>
                </div>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
