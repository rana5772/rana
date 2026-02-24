import React from "react";
import { Helmet } from "react-helmet-async";
import Heading from "../components/Heading";
import GradientButton from "../components/GradientButton";

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | rana.net.in</title>
        <meta
          name="description"
          content="View flexible pricing options for web and app development services from rana.net.in, tailored to your business needs."
        />
        <link rel="canonical" href="https://rana.net.in/pricing" />
      </Helmet>

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
