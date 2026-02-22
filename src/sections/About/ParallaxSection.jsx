import React from "react";

const ParallaxSection = () => {
  const parallaxImageUrl =
"https://images.pexels.com/photos/7752878/pexels-photo-7752878.jpeg"
  return (
    <section className="relative my-20 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div
        className="h-[300px] md:h-[400px] w-full bg-fixed bg-center bg-no-repeat bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${parallaxImageUrl}')`,
        }}
      >
        <div className="max-w-4xl px-6 text-center text-white">
          <h2 className="text-4xl new-font md:text-6xl font-semibold mb-4 drop-shadow-md">
            Full-Width Parallax
          </h2>
          <p className="text-lg md:text-xl font-light opacity-90">
            This section breaks out of its parent container to span the entire
            screen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
