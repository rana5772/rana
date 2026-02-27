import React from "react";
import { Hourglass } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="bg-white h-screen w-full fixed top-0 left-0 z-[10000000000000000] flex justify-center items-center">
      {/* Container to stack the spinner and the text vertically */}
      <div className="flex flex-col items-center gap-10">
        
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#306cce', '#72a1ed']}
        />

        {/* Loading Text */}
        <p className="text-gradient font-thin new-font text-3xl">
            rana.net.in
        </p>
        
      </div>
    </div>
  );
};

export default Loader;