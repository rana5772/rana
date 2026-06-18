import React from "react";
import { Hourglass } from "react-loader-spinner";

const Loader = ({ opacity = 50 }) => {
  return (
    <div
      className="h-screen w-full fixed top-0 left-0 z-[10000000000000000] flex justify-center items-center backdrop-blur-sm"
      style={{
        backgroundColor: `rgb(255 255 255 / ${opacity}%)`,
      }}
    >
      <div className="flex flex-col items-center gap-10">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          colors={["#306cce", "#72a1ed"]}
        />

        <p className="text-gradient font-thin new-font text-3xl">
          rana.net.in
        </p>
      </div>
    </div>
  );
};

export default Loader;