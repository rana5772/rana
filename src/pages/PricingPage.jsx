import React from "react";
import Heading from "../components/Heading";
import GradientButton from "../components/GradientButton";

const PricingPage = () => {
  return (
    <>
      <Heading
        heading={
          <>
            <span className="md:hidden">Pricing Model</span>
            <span className="hidden md:inline">Our Pricing Model</span>
          </>
        }
      />
    </>
  );
};

export default PricingPage;
