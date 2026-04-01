import React from "react";
import { Helmet } from "react-helmet-async";
import Heading from "../components/Heading";
import PortfolioComponent from "../sections/Pricing/PortfolioComponent";
import ComparisonTable from "../sections/Pricing/ComparisonTable";
import MobileAppDev from "../sections/Pricing/MobileAppDev";
import FoodDeliveryComponent from "../sections/Pricing/FoodDeliveryComponent";
import EcommerceComponent from "../sections/Pricing/EcommerceComponent";
import GridSection from "../sections/Pricing/GridSection";
import GlassBox from "../components/GlassBox";

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

      <GlassBox text="Transparent Pricing, Tailored to You." />

      <div className="text-center">
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Choose the plan that fits your goals and start scaling
          today.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-6">
        <PortfolioComponent />
        <ComparisonTable />
        <MobileAppDev />
        <FoodDeliveryComponent />
        <EcommerceComponent />
        <GridSection />
      </div>
    </>
  );
};

export default PricingPage;
